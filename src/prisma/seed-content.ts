import 'dotenv/config';

import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

import { prisma } from '@/lib/prisma';

type ContentSeedResult = {
  matched: number;
  updated: number;
  skipped: number;
  warnings: string[];
  dryRun: boolean;
};

const contentFormat = 'markdown';
const contentSourceName = 'learner-md';
const learnerMdRoot =
  process.env.LEARNER_MD_ROOT ||
  path.join(process.cwd(), 'seed-data', contentSourceName);
const dryRun =
  process.argv.includes('--dry-run') ||
  ['1', 'true', 'yes'].includes(
    (process.env.CONTENT_SEED_DRY_RUN || '').toLowerCase()
  );

const subjectFolderMap: Record<string, string> = {
  '9/english_beehive': 'English (Beehive)',
  '9/english_moments': 'English (Moments)',
  '9/hindi_kritika': 'Hindi (Kritika)',
  '9/hindi_kshitij': 'Hindi (Kshitij)',
  '9/hindi_sanchayan': 'Hindi (Sanchayan)',
  '9/hindi_sparsh': 'Hindi (Sparsh)',
  '9/maths': 'Mathematics',
  '9/science': 'Science',
  '9/social_civics': 'Political Science (Democratic Politics I)',
  '9/social_economics': 'Economics',
  '9/social_geography': 'Geography (Contemporary India I)',
  '9/social_history': 'History (India & Contemporary World I)',
  '10/english_firstflight': 'English (First Flight)',
  '10/english_footprints': 'English (Footprints Without Feet)',
  '10/hindi_kritika': 'Hindi (Kritika II)',
  '10/hindi_kshitij': 'Hindi (Kshitij II)',
  '10/hindi_sanchayan': 'Hindi (Sanchayan II)',
  '10/hindi_sparsh': 'Hindi (Sparsh II)',
  '10/maths': 'Mathematics',
  '10/science': 'Science',
  '10/social_civics': 'Political Science (Democratic Politics II)',
  '10/social_economics': 'Economics (Understanding Econ. Dev.)',
  '10/social_geography': 'Geography (Contemporary India II)',
  '10/social_history': 'History (India & Contemporary World II)',
  '11/accountancy_part1': 'Accountancy Part 1',
  '11/accountancy_part2': 'Accountancy Part 2',
  '11/biology': 'Biology',
  '11/business_studies': 'Business Studies',
  '11/chemistry_part1': 'Chemistry Part 1',
  '11/chemistry_part2': 'Chemistry Part 2',
  '11/economics_micro': 'Economics (Microeconomics)',
  '11/economics_statistics': 'Economics (Statistics)',
  '11/english_hornbill': 'English (Hornbill)',
  '11/english_snapshots': 'English (Snapshots)',
  '11/geography_india': 'Geography (India Physical Environment)',
  '11/geography_physical': 'Geography (Physical Geography)',
  '11/history': 'History (Themes in World History)',
  '11/maths': 'Mathematics',
  '11/physics_part1': 'Physics Part 1',
  '11/physics_part2': 'Physics Part 2',
  '11/polsci_constitution': 'Political Science (Indian Constitution)',
  '11/polsci_theory': 'Political Science (Political Theory)',
  '11/psychology': 'Psychology',
  '11/sociology_intro': 'Sociology (Introducing Sociology)',
  '11/sociology_understanding': 'Sociology (Understanding Society)',
  '12/accountancy_part1': 'Accountancy Part 1',
  '12/accountancy_part2': 'Accountancy Part 2',
  '12/biology': 'Biology',
  '12/business_studies_part1': 'Business Studies Part 1',
  '12/business_studies_part2': 'Business Studies Part 2',
  '12/chemistry_part1': 'Chemistry Part 1',
  '12/chemistry_part2': 'Chemistry Part 2',
  '12/economics_indian': 'Economics (Indian Economic Development)',
  '12/economics_macro': 'Economics (Macroeconomics)',
  '12/english_flamingo': 'English (Flamingo)',
  '12/english_vistas': 'English (Vistas)',
  '12/geography_human': 'Geography (Human Geography)',
  '12/geography_india': 'Geography (India People and Economy)',
  '12/history_part1': 'History (Themes in Indian History I)',
  '12/history_part2': 'History (Themes in Indian History II)',
  '12/history_part3': 'History (Themes in Indian History III)',
  '12/maths_part1': 'Mathematics Part 1',
  '12/maths_part2': 'Mathematics Part 2',
  '12/physics_part1': 'Physics Part 1',
  '12/physics_part2': 'Physics Part 2',
  '12/polsci_contemporary': 'Political Science (Contemporary World Politics)',
  '12/polsci_india': 'Political Science (Politics in India Since Independence)',
  '12/psychology': 'Psychology',
  '12/sociology_change': 'Sociology (Social Change)',
  '12/sociology_indian': 'Sociology (Indian Society)',
};

function parseGrade(classFolder: string) {
  const match = classFolder.match(/^class_(\d+)$/);
  return match ? Number(match[1]) : null;
}

function parseChapterOrder(fileName: string) {
  const match = fileName.match(/^chapter_(\d+)\.md$/);
  return match ? Number(match[1]) : null;
}

function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function titleTokens(title: string) {
  return normalizeTitle(title)
    .split(' ')
    .filter((token) => token.length > 2);
}

function extractMarkdownChapterTitle(content: string) {
  const heading = content
    .split(/\r?\n/)
    .find((line) => /^#\s*Chapter\s+\d+/i.test(line));

  if (!heading) {
    return null;
  }

  const match = heading.match(/^#\s*Chapter\s+\d+\s*[:\-–—]\s*(.+)$/i);
  return match?.[1]?.trim() || null;
}

function titlesMatch(dbTitle: string, markdownTitle: string | null) {
  if (!markdownTitle) {
    return true;
  }

  const dbNormalized = normalizeTitle(dbTitle);
  const mdNormalized = normalizeTitle(markdownTitle);

  if (dbNormalized === mdNormalized) {
    return true;
  }

  if (dbNormalized.length > 5 && mdNormalized.includes(dbNormalized)) {
    return true;
  }

  if (mdNormalized.length > 5 && dbNormalized.includes(mdNormalized)) {
    return true;
  }

  const dbTokens = new Set(titleTokens(dbTitle));
  const mdTokens = new Set(titleTokens(markdownTitle));
  const overlap = [...dbTokens].filter((token) => mdTokens.has(token)).length;
  const smallerSetSize = Math.min(dbTokens.size, mdTokens.size);

  return smallerSetSize > 0 && overlap / smallerSetSize >= 0.75;
}

function contentSource(contentPath: string) {
  return path.relative(process.cwd(), contentPath).split(path.sep).join('/');
}

async function isDirectory(directoryPath: string) {
  try {
    return (await stat(directoryPath)).isDirectory();
  } catch {
    return false;
  }
}

async function seedChapterContent() {
  const result: ContentSeedResult = {
    matched: 0,
    updated: 0,
    skipped: 0,
    warnings: [],
    dryRun,
  };

  if (!(await isDirectory(learnerMdRoot))) {
    result.warnings.push(`Learner markdown root not found: ${learnerMdRoot}`);
    return result;
  }

  const classFolders = (await readdir(learnerMdRoot)).sort();

  for (const classFolder of classFolders) {
    const grade = parseGrade(classFolder);

    if (!grade) {
      continue;
    }

    const classPath = path.join(learnerMdRoot, classFolder);

    if (!(await isDirectory(classPath))) {
      continue;
    }

    const subjectFolders = (await readdir(classPath)).sort();

    for (const subjectFolder of subjectFolders) {
      const subjectPath = path.join(classPath, subjectFolder);

      if (!(await isDirectory(subjectPath))) {
        continue;
      }

      const subjectName = subjectFolderMap[`${grade}/${subjectFolder}`];

      if (!subjectName) {
        result.skipped += 1;
        result.warnings.push(
          `No subject mapping for ${grade}/${subjectFolder}`
        );
        continue;
      }

      const subject = await prisma.subject.findFirst({
        where: {
          name: subjectName,
          academicClass: {
            level: grade,
          },
        },
        select: {
          id: true,
        },
      });

      if (!subject) {
        result.skipped += 1;
        result.warnings.push(`No DB subject found for ${grade}/${subjectName}`);
        continue;
      }

      const chapterFiles = (await readdir(subjectPath)).sort();

      for (const chapterFile of chapterFiles) {
        const order = parseChapterOrder(chapterFile);

        if (!order) {
          continue;
        }

        const chapter = await prisma.chapter.findFirst({
          where: {
            subjectId: subject.id,
            order,
          },
          select: {
            id: true,
            title: true,
          },
        });

        if (!chapter) {
          result.skipped += 1;
          result.warnings.push(
            `No DB chapter found for class ${grade}, ${subjectName}, chapter ${order}`
          );
          continue;
        }

        const chapterPath = path.join(subjectPath, chapterFile);
        const content = await readFile(chapterPath, 'utf8');
        const markdownTitle = extractMarkdownChapterTitle(content);

        if (!titlesMatch(chapter.title, markdownTitle)) {
          result.skipped += 1;
          result.warnings.push(
            `Title mismatch skipped: class ${grade}, ${subjectName}, chapter ${order}. DB "${chapter.title}", markdown "${markdownTitle ?? 'unknown'}"`
          );
          continue;
        }

        result.matched += 1;

        if (dryRun) {
          continue;
        }

        await prisma.chapter.update({
          where: {
            id: chapter.id,
          },
          data: {
            content,
            contentFormat,
            contentSource: contentSource(chapterPath),
          },
        });

        result.updated += 1;
      }
    }
  }

  return result;
}

seedChapterContent()
  .then((result) => {
    if (result.dryRun) {
      console.log('Dry run only; no database writes were made.');
    }

    console.log(`Matched chapter content entries: ${result.matched}`);
    console.log(`Updated chapters: ${result.updated}`);
    console.log(`Skipped entries: ${result.skipped}`);

    for (const warning of result.warnings) {
      console.warn(warning);
    }
  })
  .catch((error) => {
    console.error('Chapter content seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
