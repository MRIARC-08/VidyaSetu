import {
  QuestionType,
  QuizMode,
  QuizSource,
  Difficulty,
} from '@/generated/prisma/enums';
import { prisma } from '@/lib/prisma';

import { faker } from '@faker-js/faker';

// async function main() {
//   console.log('Seeding rich test user...');

//   // --------------------------------
//   // USER
//   // --------------------------------

//   const user = await prisma.user.create({
//     data: {
//       name: 'Test Student',
//       email: 'test@vidyasetu.com',
//       password: 'password123',
//       isEmailVerified: true,
//       streakCount: 7,
//       stats: {
//         create: {},
//       },
//     },
//   });

//   console.log('User created');

//   // --------------------------------
//   // CLASSES
//   // --------------------------------

//   const classes = [];

//   for (let level = 9; level <= 12; level++) {
//     const cls = await prisma.academicClass.create({
//       data: { level },
//     });
//     classes.push(cls);
//   }

//   // --------------------------------
//   // SUBJECTS
//   // --------------------------------

//   const subjectNames = ['Physics', 'Chemistry', 'Mathematics'];

//   const subjects = [];

//   for (const cls of classes) {
//     for (const name of subjectNames) {
//       const subject = await prisma.subject.create({
//         data: {
//           name,
//           academicClassId: cls.id,
//         },
//       });

//       subjects.push(subject);
//     }
//   }

//   // --------------------------------
//   // CHAPTERS
//   // --------------------------------

//   const chapters = [];

//   for (const subject of subjects) {
//     for (let i = 1; i <= 5; i++) {
//       const chapter = await prisma.chapter.create({
//         data: {
//           title: `${subject.name} Chapter ${i}`,
//           order: i,
//           subjectId: subject.id,
//         },
//       });

//       chapters.push(chapter);
//     }
//   }

//   // --------------------------------
//   // TOPICS
//   // --------------------------------

//   const topics = [];

//   for (const chapter of chapters) {
//     for (let i = 1; i <= 4; i++) {
//       const topic = await prisma.topic.create({
//         data: {
//           title: `Topic ${i}`,
//           order: i,
//           content: faker.lorem.paragraph(),
//           chapterId: chapter.id,
//         },
//       });

//       topics.push(topic);
//     }
//   }

//   // --------------------------------
//   // QUESTIONS
//   // --------------------------------

//   const questions = [];

//   for (const topic of topics) {
//     for (let i = 0; i < 20; i++) {
//       const question = await prisma.question.create({
//         data: {
//           topicId: topic.id,
//           type: QuestionType.MCQ,
//           difficulty: faker.helpers.arrayElement([
//             Difficulty.EASY,
//             Difficulty.MEDIUM,
//             Difficulty.HARD,
//           ]),
//           questionText: faker.lorem.sentence(),
//           explanation: faker.lorem.paragraph(),
//           options: {
//             create: [
//               { label: 'A', value: faker.word.words(3), isCorrect: false },
//               { label: 'B', value: faker.word.words(3), isCorrect: true },
//               { label: 'C', value: faker.word.words(3), isCorrect: false },
//               { label: 'D', value: faker.word.words(3), isCorrect: false },
//             ],
//           },
//         },
//       });

//       questions.push(question);
//     }
//   }

//   console.log('Questions created:', questions.length);

//   // --------------------------------
//   // NOTES
//   // --------------------------------

//   const notes = [];

//   for (let i = 0; i < 5; i++) {
//     const note = await prisma.note.create({
//       data: {
//         userId: user.id,
//         title: faker.lorem.words(3),
//         content: faker.lorem.paragraphs(2),
//         extractedText: faker.lorem.paragraphs(4),
//       },
//     });

//     notes.push(note);
//   }

//   // --------------------------------
//   // QUIZZES
//   // --------------------------------

//   const quizzes = [];

//   for (let i = 0; i < 10; i++) {
//     const quiz = await prisma.quiz.create({
//       data: {
//         userId: user.id,
//         mode: faker.helpers.arrayElement([QuizMode.PRACTICE, QuizMode.TEST]),
//         source: QuizSource.CHAPTER,
//         questionCount: 10,
//       },
//     });

//     quizzes.push(quiz);
//   }

//   // --------------------------------
//   // QUIZ SESSIONS
//   // --------------------------------

//   for (const quiz of quizzes) {
//     const session = await prisma.quizSession.create({
//       data: {
//         quizId: quiz.id,
//         userId: user.id,
//         totalQuestions: 10,
//         correctCount: faker.number.int({ min: 3, max: 10 }),
//         accuracy: faker.number.float({ min: 40, max: 100 }),
//         timeTaken: faker.number.int({ min: 60, max: 600 }),
//       },
//     });

//     // --------------------------------
//     // RESPONSES
//     // --------------------------------

//     const sampleQuestions = questions.slice(0, 10);

//     for (const q of sampleQuestions) {
//       await prisma.questionResponse.create({
//         data: {
//           sessionId: session.id,
//           questionId: q.id,
//           timeTaken: faker.number.int({ min: 5, max: 30 }),
//           isCorrect: faker.datatype.boolean(),
//           score: faker.number.float({ min: 0, max: 1 }),
//         },
//       });
//     }
//   }

//   console.log('Rich user seeded successfully 🚀');
// }

// main()
//   .catch(console.error)
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// The Master Configuration for NCERT Books

const ncertBooks = [
  {
    grade: 9,
    subject: 'Science',
    code: 'iesc1',
    total: 12,
    chapters: [
      'Matter in Our Surroundings',
      'Is Matter Around Us Pure',
      'Atoms and Molecules',
      'Structure of the Atom',
      'The Fundamental Unit of Life',
      'Tissues',
      'Motion',
      'Force and Laws of Motion',
      'Gravitation',
      'Work and Energy',
      'Sound',
      'Improvement in Food Resources',
    ],
  },
  {
    grade: 9,
    subject: 'Mathematics',
    code: 'iemh1',
    total: 12,
    chapters: [
      'Number Systems',
      'Polynomials',
      'Coordinate Geometry',
      'Linear Equations in Two Variables',
      "Introduction to Euclid's Geometry",
      'Lines and Angles',
      'Triangles',
      'Quadrilaterals',
      'Circles',
      "Heron's Formula",
      'Surface Areas and Volumes',
      'Statistics',
    ],
  },
  {
    grade: 10,
    subject: 'Science',
    code: 'jesc1',
    total: 13,
    chapters: [
      'Chemical Reactions and Equations',
      'Acids, Bases and Salts',
      'Metals and Non-metals',
      'Carbon and its Compounds',
      'Life Processes',
      'Control and Coordination',
      'How do Organisms Reproduce?',
      'Heredity',
      'Light – Reflection and Refraction',
      'Human Eye and Colourful World',
      'Electricity',
      'Magnetic Effects of Electric Current',
      'Our Environment',
    ],
  },
  {
    grade: 10,
    subject: 'Mathematics',
    code: 'jemh1',
    total: 14,
    chapters: [
      'Real Numbers',
      'Polynomials',
      'Pair of Linear Equations in Two Variables',
      'Quadratic Equations',
      'Arithmetic Progressions',
      'Triangles',
      'Coordinate Geometry',
      'Introduction to Trigonometry',
      'Some Applications of Trigonometry',
      'Circles',
      'Areas Related to Circles',
      'Surface Areas and Volumes',
      'Statistics',
      'Probability',
    ],
  },
  {
    grade: 12,
    subject: 'Biology',
    code: 'lebo1',
    total: 13,
    chapters: [
      'Sexual Reproduction in Flowering Plants',
      'Human Reproduction',
      'Reproductive Health',
      'Principles of Inheritance and Variation',
      'Molecular Basis of Inheritance',
      'Evolution',
      'Human Health and Disease',
      'Microbes in Human Welfare',
      'Biotechnology: Principles and Processes',
      'Biotechnology and its Applications',
      'Organisms and Populations',
      'Ecosystem',
      'Biodiversity and Conservation',
    ],
  },

  {
    grade: 9,
    subject: 'English (Beehive)',
    code: 'iebe1',
    total: 11,
    chapters: [
      'The Fun They Had',
      'The Sound of Music',
      'The Little Girl',
      'A Truly Beautiful Mind',
      'The Snake and the Mirror',
      'My Childhood',
      'Packing',
      'Reach for the Top',
      'The Bond of Love',
      'Kathmandu',
      'If I Were You',
    ],
  },
  {
    grade: 9,
    subject: 'English (Moments)',
    code: 'iemo1',
    total: 10,
    chapters: [
      'The Lost Child',
      'The Adventures of Toto',
      'Iswaran the Storyteller',
      'In the Kingdom of Fools',
      'The Happy Prince',
      'Weathering the Storm in Ersama',
      'The Last Leaf',
      'A House Is Not a Home',
      'The Accidental Tourist',
      'The Beggar',
    ],
  },
  {
    grade: 9,
    subject: 'History (India & Contemporary World I)',
    code: 'iess1',
    total: 5,
    chapters: [
      'The French Revolution',
      'Socialism in Europe and the Russian Revolution',
      'Nazism and the Rise of Hitler',
      'Forest Society and Colonialism',
      'Pastoralists in the Modern World',
    ],
  },
  {
    grade: 9,
    subject: 'Geography (Contemporary India I)',
    code: 'iess2',
    total: 6,
    chapters: [
      'India - Size and Location',
      'Physical Features of India',
      'Drainage',
      'Climate',
      'Natural Vegetation and Wildlife',
      'Population',
    ],
  },
  {
    grade: 9,
    subject: 'Political Science (Democratic Politics I)',
    code: 'iess3',
    total: 5,
    chapters: [
      'What is Democracy? Why Democracy?',
      'Constitutional Design',
      'Electoral Politics',
      'Working of Institutions',
      'Democratic Rights',
    ],
  },
  {
    grade: 9,
    subject: 'Economics',
    code: 'iess4',
    total: 4,
    chapters: [
      'The Story of Village Palampur',
      'People as Resource',
      'Poverty as a Challenge',
      'Food Security in India',
    ],
  },
  { grade: 9, subject: 'Hindi (Kshitij)', code: 'ihks1', total: 17 },
  { grade: 9, subject: 'Hindi (Sparsh)', code: 'ihsp1', total: 15 },
  { grade: 9, subject: 'Hindi (Kritika)', code: 'ihkr1', total: 5 },
  { grade: 9, subject: 'Hindi (Sanchayan)', code: 'ihsy1', total: 6 },

  {
    grade: 10,
    subject: 'English (First Flight)',
    code: 'jeff1',
    total: 11,
    chapters: [
      'A Letter to God',
      'Nelson Mandela: Long Walk to Freedom',
      'Two Stories about Flying',
      'From the Diary of Anne Frank',
      'The Hundred Dresses - I',
      'The Hundred Dresses - II',
      'Glimpses of India',
      'Mijbil the Otter',
      'Madam Rides the Bus',
      'The Sermon at Benares',
      'The Proposal',
    ],
  },
  {
    grade: 10,
    subject: 'English (Footprints Without Feet)',
    code: 'jefp1',
    total: 10,
    chapters: [
      'A Triumph of Surgery',
      "The Thief's Story",
      'The Midnight Visitor',
      'A Question of Trust',
      'Footprints without Feet',
      'The Making of a Scientist',
      'The Necklace',
      'The Hack Driver',
      'Bholi',
      'The Book That Saved the Earth',
    ],
  },
  {
    grade: 10,
    subject: 'History (India & Contemporary World II)',
    code: 'jess1',
    total: 5,
    chapters: [
      'The Rise of Nationalism in Europe',
      'Nationalism in India',
      'The Making of a Global World',
      'The Age of Industrialisation',
      'Print Culture and the Modern World',
    ],
  },
  {
    grade: 10,
    subject: 'Geography (Contemporary India II)',
    code: 'jess2',
    total: 7,
    chapters: [
      'Resources and Development',
      'Forest and Wildlife Resources',
      'Water Resources',
      'Agriculture',
      'Minerals and Energy Resources',
      'Manufacturing Industries',
      'Lifelines of National Economy',
    ],
  },
  {
    grade: 10,
    subject: 'Political Science (Democratic Politics II)',
    code: 'jess3',
    total: 8,
    chapters: [
      'Power Sharing',
      'Federalism',
      'Democracy and Diversity',
      'Gender, Religion and Caste',
      'Popular Struggles and Movements',
      'Political Parties',
      'Outcomes of Democracy',
      'Challenges to Democracy',
    ],
  },
  {
    grade: 10,
    subject: 'Economics (Understanding Econ. Dev.)',
    code: 'jess4',
    total: 5,
    chapters: [
      'Development',
      'Sectors of the Indian Economy',
      'Money and Credit',
      'Globalisation and the Indian Economy',
      'Consumer Rights',
    ],
  },
  { grade: 10, subject: 'Hindi (Kshitij II)', code: 'jhks1', total: 17 },
  { grade: 10, subject: 'Hindi (Sparsh II)', code: 'jhsp1', total: 8 },
  { grade: 10, subject: 'Hindi (Kritika II)', code: 'jhkr1', total: 5 },
  { grade: 10, subject: 'Hindi (Sanchayan II)', code: 'jhsy1', total: 3 },

  {
    grade: 11,
    subject: 'Mathematics',
    code: 'kemh1',
    total: 14,
    chapters: [
      'Sets',
      'Relations and Functions',
      'Trigonometric Functions',
      'Complex Numbers and Quadratic Equations',
      'Linear Inequalities',
      'Permutations and Combinations',
      'Binomial Theorem',
      'Sequences and Series',
      'Straight Lines',
      'Conic Sections',
      'Introduction to Three Dimensional Geometry',
      'Limits and Derivatives',
      'Statistics',
      'Probability',
    ],
  },
  {
    grade: 11,
    subject: 'Physics Part 1',
    code: 'keph1',
    total: 8,
    chapters: [
      'Units and Measurements',
      'Motion in a Straight Line',
      'Motion in a Plane',
      'Laws of Motion',
      'Work, Energy and Power',
      'System of Particles and Rotational Motion',
      'Gravitation',
      'Mechanical Properties of Solids',
    ],
  },
  {
    grade: 11,
    subject: 'Physics Part 2',
    code: 'keph2',
    total: 6,
    chapters: [
      'Mechanical Properties of Fluids',
      'Thermal Properties of Matter',
      'Thermodynamics',
      'Kinetic Theory',
      'Oscillations',
      'Waves',
    ],
  },
  {
    grade: 11,
    subject: 'Chemistry Part 1',
    code: 'kech1',
    total: 5,
    chapters: [
      'Some Basic Concepts of Chemistry',
      'Structure of Atom',
      'Classification of Elements and Periodicity in Properties',
      'Chemical Bonding and Molecular Structure',
      'Thermodynamics',
    ],
  },
  {
    grade: 11,
    subject: 'Chemistry Part 2',
    code: 'kech2',
    total: 4,
    chapters: [
      'Equilibrium',
      'Redox Reactions',
      'Organic Chemistry: Some Basic Principles and Techniques',
      'Hydrocarbons',
    ],
  },
  {
    grade: 11,
    subject: 'Biology',
    code: 'kebo1',
    total: 19,
    chapters: [
      'The Living World',
      'Biological Classification',
      'Plant Kingdom',
      'Animal Kingdom',
      'Morphology of Flowering Plants',
      'Anatomy of Flowering Plants',
      'Structural Organisation in Animals',
      'Cell: The Unit of Life',
      'Biomolecules',
      'Cell Cycle and Cell Division',
      'Photosynthesis in Higher Plants',
      'Respiration in Plants',
      'Plant Growth and Development',
      'Breathing and Exchange of Gases',
      'Body Fluids and Circulation',
      'Excretory Products and their Elimination',
      'Locomotion and Movement',
      'Neural Control and Coordination',
      'Chemical Coordination and Integration',
    ],
  },
  {
    grade: 11,
    subject: 'Accountancy Part 1',
    code: 'keac1',
    total: 8,
    chapters: [
      'Introduction to Accounting',
      'Theory Base of Accounting',
      'Recording of Transactions - I',
      'Recording of Transactions - II',
      'Bank Reconciliation Statement',
      'Trial Balance and Rectification of Errors',
      'Depreciation, Provisions and Reserves',
      'Bill of Exchange',
    ],
  },
  {
    grade: 11,
    subject: 'Accountancy Part 2',
    code: 'keac2',
    total: 5,
    chapters: [
      'Financial Statements - I',
      'Financial Statements - II',
      'Accounts from Incomplete Records',
      'Applications of Computers in Accounting',
      'Computerised Accounting System',
    ],
  },
  {
    grade: 11,
    subject: 'Business Studies',
    code: 'kebs1',
    total: 11,
    chapters: [
      'Nature and Purpose of Business',
      'Forms of Business Organisation',
      'Private, Public and Global Enterprises',
      'Business Services',
      'Emerging Modes of Business',
      'Social Responsibilities of Business and Business Ethics',
      'Formation of a Company',
      'Sources of Business Finance',
      'Small Business',
      'Internal Trade',
      'International Business',
    ],
  },
  {
    grade: 11,
    subject: 'Economics (Microeconomics)',
    code: 'keec1',
    total: 9,
    chapters: [
      'Introduction',
      'Theory of Consumer Behaviour',
      'Production and Costs',
      'The Theory of the Firm under Perfect Competition',
      'Market Equilibrium',
      'Non-Competitive Markets',
      'Demand',
      'Supply',
      'Price Elasticity',
    ],
  },
  {
    grade: 11,
    subject: 'Economics (Statistics)',
    code: 'keec2',
    total: 9,
    chapters: [
      'Introduction',
      'Collection of Data',
      'Organisation of Data',
      'Presentation of Data',
      'Measures of Central Tendency',
      'Measures of Dispersion',
      'Correlation',
      'Index Numbers',
      'Use of Statistical Tools',
    ],
  },
  {
    grade: 11,
    subject: 'History (Themes in World History)',
    code: 'kehs1',
    total: 7,
    chapters: [
      'Writing and City Life',
      'An Empire Across Three Continents',
      'Nomadic Empires',
      'The Three Orders',
      'Changing Cultural Traditions',
      'Displacing Indigenous Peoples',
      'Paths to Modernisation',
    ],
  },
  {
    grade: 11,
    subject: 'Geography (Physical Geography)',
    code: 'kegy1',
    total: 14,
    chapters: [
      'Geography as a Discipline',
      'The Origin and Evolution of the Earth',
      'Interior of the Earth',
      'Distribution of Oceans and Continents',
      'Minerals and Rocks',
      'Geomorphic Processes',
      'Landforms and their Evolution',
      'Composition and Structure of Atmosphere',
      'Solar Radiation, Heat Balance and Temperature',
      'Atmospheric Circulation and Weather Systems',
      'Water in the Atmosphere',
      'World Climate and Climate Change',
      'Water (Oceans)',
      'Movements of Ocean Water',
    ],
  },
  {
    grade: 11,
    subject: 'Geography (India Physical Environment)',
    code: 'kegy2',
    total: 6,
    chapters: [
      'India - Location',
      'Structure and Physiography',
      'Drainage System',
      'Climate',
      'Natural Vegetation',
      'Soils',
    ],
  },
  {
    grade: 11,
    subject: 'Political Science (Indian Constitution)',
    code: 'keps1',
    total: 10,
    chapters: [
      'Constitution: Why and How?',
      'Rights in the Indian Constitution',
      'Election and Representation',
      'Executive',
      'Legislature',
      'Judiciary',
      'Federalism',
      'Local Governments',
      'Constitution as a Living Document',
      'The Philosophy of the Constitution',
    ],
  },
  {
    grade: 11,
    subject: 'Political Science (Political Theory)',
    code: 'keps2',
    total: 8,
    chapters: [
      'Political Theory: An Introduction',
      'Freedom',
      'Equality',
      'Social Justice',
      'Rights',
      'Citizenship',
      'Nationalism',
      'Secularism',
    ],
  },
  {
    grade: 11,
    subject: 'Sociology (Introducing Sociology)',
    code: 'kesy1',
    total: 5,
    chapters: [
      'Sociology and Society',
      'Terms, Concepts and their Use in Sociology',
      'Understanding Social Institutions',
      'Culture and Socialisation',
      'Doing Sociology: Research Methods',
    ],
  },
  {
    grade: 11,
    subject: 'Sociology (Understanding Society)',
    code: 'kesy2',
    total: 5,
    chapters: [
      'Social Structure, Stratification and Social Processes in Society',
      'Social Change and Social Order in Rural and Urban Society',
      'Environment and Society',
      'Introducing Western Sociologists',
      'Indian Sociologists',
    ],
  },
  {
    grade: 11,
    subject: 'Psychology',
    code: 'kepy1',
    total: 9,
    chapters: [
      'What is Psychology?',
      'Methods of Enquiry in Psychology',
      'The Bases of Human Behaviour',
      'Human Development',
      'Sensory, Attentional and Perceptual Processes',
      'Learning',
      'Human Memory',
      'Thinking',
      'Motivation and Emotion',
    ],
  },
  {
    grade: 11,
    subject: 'English (Hornbill)',
    code: 'kehb1',
    total: 8,
    chapters: [
      'The Portrait of a Lady',
      "We're Not Afraid to Die",
      'Discovering Tut: the Saga Continues',
      'Landscape of the Soul',
      'The Ailing Planet',
      'The Browning Version',
      'The Adventure',
      'Silk Road',
    ],
  },
  {
    grade: 11,
    subject: 'English (Snapshots)',
    code: 'kesp1',
    total: 8,
    chapters: [
      'The Summer of the Beautiful White Horse',
      'The Address',
      "Ranga's Marriage",
      'Albert Einstein at School',
      "Mother's Day",
      'The Ghat of the Only World',
      'Birth',
      'The Tale of Melon City',
    ],
  },

  {
    grade: 12,
    subject: 'Mathematics Part 1',
    code: 'lemh1',
    total: 6,
    chapters: [
      'Relations and Functions',
      'Inverse Trigonometric Functions',
      'Matrices',
      'Determinants',
      'Continuity and Differentiability',
      'Application of Derivatives',
    ],
  },
  {
    grade: 12,
    subject: 'Mathematics Part 2',
    code: 'lemh2',
    total: 7,
    chapters: [
      'Integrals',
      'Application of Integrals',
      'Differential Equations',
      'Vector Algebra',
      'Three Dimensional Geometry',
      'Linear Programming',
      'Probability',
    ],
  },
  {
    grade: 12,
    subject: 'Physics Part 1',
    code: 'leph1',
    total: 8,
    chapters: [
      'Electric Charges and Fields',
      'Electrostatic Potential and Capacitance',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Electromagnetic Induction',
      'Alternating Current',
      'Electromagnetic Waves',
    ],
  },
  {
    grade: 12,
    subject: 'Physics Part 2',
    code: 'leph2',
    total: 6,
    chapters: [
      'Ray Optics and Optical Instruments',
      'Wave Optics',
      'Dual Nature of Radiation and Matter',
      'Atoms',
      'Nuclei',
      'Semiconductor Electronics: Materials, Devices and Simple Circuits',
    ],
  },
  {
    grade: 12,
    subject: 'Chemistry Part 1',
    code: 'lech1',
    total: 5,
    chapters: [
      'Solutions',
      'Electrochemistry',
      'Chemical Kinetics',
      'The d- and f- Block Elements',
      'Coordination Compounds',
    ],
  },
  {
    grade: 12,
    subject: 'Chemistry Part 2',
    code: 'lech2',
    total: 5,
    chapters: [
      'Haloalkanes and Haloarenes',
      'Alcohols, Phenols and Ethers',
      'Aldehydes, Ketones and Carboxylic Acids',
      'Amines',
      'Biomolecules',
    ],
  },
  {
    grade: 12,
    subject: 'Accountancy Part 1',
    code: 'leac1',
    total: 5,
    chapters: [
      'Accounting for Not-for-Profit Organisation',
      'Accounting for Partnership : Basic Concepts',
      'Reconstitution of a Partnership Firm – Admission of a Partner',
      'Reconstitution of a Partnership Firm – Retirement/Death of a Partner',
      'Dissolution of Partnership Firm',
    ],
  },
  {
    grade: 12,
    subject: 'Accountancy Part 2',
    code: 'leac2',
    total: 6,
    chapters: [
      'Accounting for Share Capital',
      'Issue and Redemption of Debentures',
      'Financial Statements of a Company',
      'Analysis of Financial Statements',
      'Accounting Ratios',
      'Cash Flow Statement',
    ],
  },
  {
    grade: 12,
    subject: 'Business Studies Part 1',
    code: 'lebs1',
    total: 8,
    chapters: [
      'Nature and Significance of Management',
      'Principles of Management',
      'Business Environment',
      'Planning',
      'Organising',
      'Staffing',
      'Directing',
      'Controlling',
    ],
  },
  {
    grade: 12,
    subject: 'Business Studies Part 2',
    code: 'lebs2',
    total: 4,
    chapters: [
      'Financial Management',
      'Financial Markets',
      'Marketing',
      'Consumer Protection',
    ],
  },
  {
    grade: 12,
    subject: 'Economics (Macroeconomics)',
    code: 'leec1',
    total: 6,
    chapters: [
      'Introduction',
      'National Income Accounting',
      'Money and Banking',
      'Determination of Income and Employment',
      'Government Budget and the Economy',
      'Open Economy Macroeconomics',
    ],
  },
  {
    grade: 12,
    subject: 'Economics (Indian Economic Development)',
    code: 'leec2',
    total: 8,
    chapters: [
      'Indian Economy on the Eve of Independence',
      'Indian Economy 1950-1990',
      'Liberalisation, Privatisation and Globalisation : An Appraisal',
      'Human Capital Formation in India',
      'Rural Development',
      'Employment: Growth, Informalisation and other issues',
      'Environment and Sustainable Development',
      'Comparative Development Experiences of India and its Neighbours',
    ],
  },
  {
    grade: 12,
    subject: 'History (Themes in Indian History I)',
    code: 'lehs1',
    total: 4,
    chapters: [
      'Bricks, Beads and Bones',
      'Kings, Farmers and Towns',
      'Kinship, Caste and Class',
      'Thinkers, Beliefs and Buildings',
    ],
  },
  {
    grade: 12,
    subject: 'History (Themes in Indian History II)',
    code: 'lehs2',
    total: 5,
    chapters: [
      'Through the Eyes of Travellers',
      'Bhakti-Sufi Traditions',
      'An Imperial Capital: Vijayanagara',
      'Peasants, Zamindars and the State',
      'Kings and Chronicles',
    ],
  },
  {
    grade: 12,
    subject: 'History (Themes in Indian History III)',
    code: 'lehs3',
    total: 6,
    chapters: [
      'Colonialism and the Countryside',
      'Rebels and the Raj',
      'Colonial Cities',
      'Mahatma Gandhi and the Nationalist Movement',
      'Understanding Partition',
      'Framing the Constitution',
    ],
  },
  {
    grade: 12,
    subject: 'Geography (Human Geography)',
    code: 'legy1',
    total: 8,
    chapters: [
      'Human Geography Nature and Scope',
      'The World Population Distribution, Density and Growth',
      'Human Development',
      'Primary Activities',
      'Secondary Activities',
      'Tertiary and Quaternary Activities',
      'Transport and Communication',
      'International Trade',
    ],
  },
  {
    grade: 12,
    subject: 'Geography (India People and Economy)',
    code: 'legy2',
    total: 9,
    chapters: [
      'Population : Distribution, Density, Growth and Composition',
      'Human Settlements',
      'Land Resources and Agriculture',
      'Water Resources',
      'Mineral and Energy Resources',
      'Planning and Sustainable Development in Indian Context',
      'Transport and Communication',
      'International Trade',
      'Geographical Perspective on Selected Issues and Problems',
    ],
  },
  {
    grade: 12,
    subject: 'Political Science (Contemporary World Politics)',
    code: 'leps1',
    total: 7,
    chapters: [
      'The End of Bipolarity',
      'Contemporary Centres of Power',
      'Contemporary South Asia',
      'International Organisations',
      'Security in the Contemporary World',
      'Environment and Natural Resources',
      'Globalisation',
    ],
  },
  {
    grade: 12,
    subject: 'Political Science (Politics in India Since Independence)',
    code: 'leps2',
    total: 8,
    chapters: [
      'Challenges of Nation Building',
      'Era of One-party Dominance',
      'Politics of Planned Development',
      "India's External Relations",
      'Challenges to and Restoration of the Congress System',
      'The Crisis of Democratic Order',
      'Regional Aspirations',
      'Recent Developments in Indian Politics',
    ],
  },
  {
    grade: 12,
    subject: 'Sociology (Indian Society)',
    code: 'lesy1',
    total: 7,
    chapters: [
      'Introducing Indian Society',
      'The Demographic Structure of the Indian Society',
      'Social Institutions: Continuity and Change',
      'The Market as a Social Institution',
      'Patterns of Social Inequality and Exclusion',
      'The Challenges of Cultural Diversity',
      'Suggestions for Project Work',
    ],
  },
  {
    grade: 12,
    subject: 'Sociology (Social Change)',
    code: 'lesy2',
    total: 8,
    chapters: [
      'Structural Change',
      'Cultural Change',
      'The Story of Indian Democracy',
      'Change and Development in Rural Society',
      'Change and Development in Industrial Society',
      'Globalisation and Social Change',
      'Mass Media and Communications',
      'Social Movements',
    ],
  },
  {
    grade: 12,
    subject: 'Psychology',
    code: 'lepy1',
    total: 9,
    chapters: [
      'Variations in Psychological Attributes',
      'Self and Personality',
      'Meeting Life Challenges',
      'Psychological Disorders',
      'Therapeutic Approaches',
      'Attitude and Social Cognition',
      'Social Influence and Group Processes',
      'Psychology and Life',
      'Developing Psychological Skills',
    ],
  },
  {
    grade: 12,
    subject: 'English (Flamingo)',
    code: 'lefl1',
    total: 14,
    chapters: [
      'The Last Lesson',
      'Lost Spring',
      'Deep Water',
      'The Rattrap',
      'Indigo',
      'Poets and Pancakes',
      'The Interview',
      'Going Places',
      'My Mother at Sixty-six',
      'An Elementary School Classroom in a Slum',
      'Keeping Quiet',
      'A Thing of Beauty',
      'A Roadside Stand',
      "Aunt Jennifer's Tigers",
    ],
  },
  {
    grade: 12,
    subject: 'English (Vistas)',
    code: 'levi1',
    total: 8,
    chapters: [
      'The Third Level',
      'The Tiger King',
      'Journey to the end of the Earth',
      'The Enemy',
      'Should Wizard hit Mommy',
      'On the Face of It',
      'Evans Tries an O-level',
      'Memories of Childhood',
    ],
  },
];

async function main() {
  console.log(
    'Wiping existing data for AcademicClass, Subject, and Chapter...'
  );
  await prisma.chapter.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.academicClass.deleteMany({});
  console.log('Wipe complete.');

  for (const book of ncertBooks) {
    // 2. Ensure AcademicClass exists
    const academicClass = await prisma.academicClass.upsert({
      where: { level: book.grade },
      update: {},
      create: { level: book.grade },
    });

    // 3. Create Subject
    // Since we just wiped the DB, we can safely just create the subject
    const subject = await prisma.subject.create({
      data: { name: book.subject, academicClassId: academicClass.id },
    });

    console.log(`📚 Populating: Class ${book.grade} - ${book.subject}`);

    // 4. Generate Chapter Data Array
    const chaptersData = [];

    for (let i = 1; i <= book.total; i++) {
      // The zero-padding logic: turns '2' into '02'
      const paddedChapterStr = String(i).padStart(2, '0');
      const pdfUrl = `https://ncert.nic.in/textbook/pdf/${book.code}${paddedChapterStr}.pdf`;

      // Assign exact title if available, otherwise fallback to "Chapter X"
      const chapterTitle =
        (book as any).chapters && (book as any).chapters[i - 1]
          ? (book as any).chapters[i - 1]
          : `Chapter ${i}`;

      chaptersData.push({
        title: chapterTitle,
        order: i,
        pdf: pdfUrl,
        subjectId: subject.id,
      });
    }

    // 5. Bulk Insert Chapters (Super Fast)
    if (chaptersData.length > 0) {
      await prisma.chapter.createMany({
        data: chaptersData,
      });
    }
  }

  console.log(
    '✅ Seeding complete! Database is populated with exact titles and direct PDF links.'
  );
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
