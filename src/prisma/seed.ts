import {
  QuestionType,
  QuizMode,
  QuizSource,
  Difficulty,
} from '@/generated/prisma/enums';
import { prisma } from '@/lib/prisma';

import { faker } from '@faker-js/faker';

async function main() {
  console.log('Seeding rich test user...');

  // --------------------------------
  // USER
  // --------------------------------

  const user = await prisma.user.create({
    data: {
      name: 'Test Student',
      email: 'test@vidyasetu.com',
      password: 'password123',
      isEmailVerified: true,
      streakCount: 7,
      stats: {
        create: {},
      },
    },
  });

  console.log('User created');

  // --------------------------------
  // CLASSES
  // --------------------------------

  const classes = [];

  for (let level = 9; level <= 12; level++) {
    const cls = await prisma.academicClass.create({
      data: { level },
    });
    classes.push(cls);
  }

  // --------------------------------
  // SUBJECTS
  // --------------------------------

  const subjectNames = ['Physics', 'Chemistry', 'Mathematics'];

  const subjects = [];

  for (const cls of classes) {
    for (const name of subjectNames) {
      const subject = await prisma.subject.create({
        data: {
          name,
          academicClassId: cls.id,
        },
      });

      subjects.push(subject);
    }
  }

  // --------------------------------
  // CHAPTERS
  // --------------------------------

  const chapters = [];

  for (const subject of subjects) {
    for (let i = 1; i <= 5; i++) {
      const chapter = await prisma.chapter.create({
        data: {
          title: `${subject.name} Chapter ${i}`,
          order: i,
          subjectId: subject.id,
        },
      });

      chapters.push(chapter);
    }
  }

  // --------------------------------
  // TOPICS
  // --------------------------------

  const topics = [];

  for (const chapter of chapters) {
    for (let i = 1; i <= 4; i++) {
      const topic = await prisma.topic.create({
        data: {
          title: `Topic ${i}`,
          order: i,
          content: faker.lorem.paragraph(),
          chapterId: chapter.id,
        },
      });

      topics.push(topic);
    }
  }

  // --------------------------------
  // QUESTIONS
  // --------------------------------

  const questions = [];

  for (const topic of topics) {
    for (let i = 0; i < 20; i++) {
      const question = await prisma.question.create({
        data: {
          topicId: topic.id,
          type: QuestionType.MCQ,
          difficulty: faker.helpers.arrayElement([
            Difficulty.EASY,
            Difficulty.MEDIUM,
            Difficulty.HARD,
          ]),
          questionText: faker.lorem.sentence(),
          explanation: faker.lorem.paragraph(),
          options: {
            create: [
              { label: 'A', value: faker.word.words(3), isCorrect: false },
              { label: 'B', value: faker.word.words(3), isCorrect: true },
              { label: 'C', value: faker.word.words(3), isCorrect: false },
              { label: 'D', value: faker.word.words(3), isCorrect: false },
            ],
          },
        },
      });

      questions.push(question);
    }
  }

  console.log('Questions created:', questions.length);

  // --------------------------------
  // NOTES
  // --------------------------------

  const notes = [];

  for (let i = 0; i < 5; i++) {
    const note = await prisma.note.create({
      data: {
        userId: user.id,
        title: faker.lorem.words(3),
        content: faker.lorem.paragraphs(2),
        extractedText: faker.lorem.paragraphs(4),
      },
    });

    notes.push(note);
  }

  // --------------------------------
  // QUIZZES
  // --------------------------------

  const quizzes = [];

  for (let i = 0; i < 10; i++) {
    const quiz = await prisma.quiz.create({
      data: {
        userId: user.id,
        mode: faker.helpers.arrayElement([QuizMode.PRACTICE, QuizMode.TEST]),
        source: QuizSource.CHAPTER,
        questionCount: 10,
      },
    });

    quizzes.push(quiz);
  }

  // --------------------------------
  // QUIZ SESSIONS
  // --------------------------------

  for (const quiz of quizzes) {
    const session = await prisma.quizSession.create({
      data: {
        quizId: quiz.id,
        userId: user.id,
        totalQuestions: 10,
        correctCount: faker.number.int({ min: 3, max: 10 }),
        accuracy: faker.number.float({ min: 40, max: 100 }),
        timeTaken: faker.number.int({ min: 60, max: 600 }),
      },
    });

    // --------------------------------
    // RESPONSES
    // --------------------------------

    const sampleQuestions = questions.slice(0, 10);

    for (const q of sampleQuestions) {
      await prisma.questionResponse.create({
        data: {
          sessionId: session.id,
          questionId: q.id,
          timeTaken: faker.number.int({ min: 5, max: 30 }),
          isCorrect: faker.datatype.boolean(),
          score: faker.number.float({ min: 0, max: 1 }),
        },
      });
    }
  }

  console.log('Rich user seeded successfully 🚀');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
