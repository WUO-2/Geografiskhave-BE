const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  const treasureHunt = await prismaClient.treasureHunt.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Treasure Hunt",
    },
  });

  const task1 = await prismaClient.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Task 1",
      treasureHuntId: 1,
      latitude: 1.3521,
      longitude: 103.8198,
      description: "Task 1 Description",
      question: "Task 1 Question",
    },
  });
  const task2 = await prismaClient.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "Task 2",
      treasureHuntId: 1,
      latitude: 1.3521,
      longitude: 103.8198,
      description: "Task 2 Description",
      question: "Task 2 Question",
    },
  });

  const task3 = await prismaClient.task.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "Task 3",
      treasureHuntId: 1,
      latitude: 1.3521,

      longitude: 103.8198,
      description: "Task 3 Description",
      question: "Task 3 Question",
    },
  });

  const task4 = await prismaClient.task.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Task 4",
      treasureHuntId: 1,
      latitude: 1.3521,
      longitude: 103.8198,
      description: "Task 4 Description",
      question: "Task 4 Question",
    },
  });

  const task5 = await prismaClient.task.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: "Task 5",
      treasureHuntId: 1,
      latitude: 1.3521,
      longitude: 103.8198,
      description: "Task 5 Description",

      question: "Task 5 Question",
    },
  });

  const task6 = await prismaClient.task.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      name: "Task 6",
      treasureHuntId: 1,
      latitude: 1.3521,
      longitude: 103.8198,
      description: "Task 6 Description",
      question: "Task 6 Question",
    },
  });

  const answer1 = await prismaClient.answer.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      taskId: 1,
      isCorrect: false,
      answer: "Answer 1",
    },
  });

  const answer2 = await prismaClient.answer.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      taskId: 1,
      isCorrect: false,
      answer: "Answer 2",
    },
  });

  const answer3 = await prismaClient.answer.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      taskId: 1,
      isCorrect: true,
      answer: "Answer 3",
    },
  });

  const answer4 = await prismaClient.answer.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      taskId: 2,
      isCorrect: false,
      answer: "Answer 4",
    },
  });

  const answer5 = await prismaClient.answer.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      taskId: 2,
      isCorrect: true,
      answer: "Answer 5",
    },
  });

  const answer6 = await prismaClient.answer.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      taskId: 2,
      isCorrect: false,
      answer: "Answer 6",
    },
  });

  const answer7 = await prismaClient.answer.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      taskId: 3,
      isCorrect: false,
      answer: "Answer 7",
    },
  });

  const answer8 = await prismaClient.answer.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      taskId: 3,
      isCorrect: false,
      answer: "Answer 8",
    },
  });

  const answer9 = await prismaClient.answer.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      taskId: 3,
      isCorrect: true,
      answer: "Answer 9",
    },
  });

  const answer10 = await prismaClient.answer.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      taskId: 4,
      isCorrect: false,
      answer: "Answer 10",
    },
  });

  const answer11 = await prismaClient.answer.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      taskId: 4,
      isCorrect: true,
      answer: "Answer 11",
    },
  });

  const answer12 = await prismaClient.answer.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      taskId: 4,
      isCorrect: false,
      answer: "Answer 12",
    },
  });

  const answer13 = await prismaClient.answer.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      taskId: 5,
      isCorrect: true,
      answer: "Answer 13",
    },
  });

  const answer14 = await prismaClient.answer.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      taskId: 5,
      isCorrect: false,
      answer: "Answer 14",
    },
  });

  const answer15 = await prismaClient.answer.upsert({
    where: { id: 15 },
    update: {},
    create: {
      id: 15,
      taskId: 5,
      isCorrect: false,
      answer: "Answer 15",
    },
  });

  const answer16 = await prismaClient.answer.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      taskId: 6,

      isCorrect: false,
      answer: "Answer 16",
    },
  });

  const answer17 = await prismaClient.answer.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      taskId: 6,
      isCorrect: true,
      answer: "Answer 17",
    },
  });

  const answer18 = await prismaClient.answer.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      taskId: 6,
      isCorrect: false,
      answer: "Answer 18",
    },
  });
};

main()
  .then(async () => {
    console.log("Seed complete");
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
  });
