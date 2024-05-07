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
      name: "Legepladsen",
      treasureHuntId: 1,
      latitude: 55.474527,
      longitude: 9.491861,
      description: "Task 1 Description",
      question: "Hvilket slags blad kan I finde nær legepladsen?",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/legeplads.jpg",
      info: "Jeres første eventyr begynder nær indgangen til Geografisk Have. I skal sætte kursen mod legepladsen, hvor den første opgave venter på jer.",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Legeplads.png",
    },
  });
  const task2 = await prismaClient.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "Dyrefolden",
      treasureHuntId: 1,
      latitude: 55.474475,
      longitude: 9.49227,
      description: "Hvilket dyr kan I finde i vores dyrefold?",
      question: "Hvilket dyr kan I finde i vores dyrefold?",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/dyrefolden.jpg",
      info: "Nu skal I videre til dyrefolden! Find den næste opgave nær vores søde dyr for at fortsætte eventyret.",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Dyrefolden.png",
    },
  });

  const task3 = await prismaClient.task.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "Væksthusene",
      treasureHuntId: 1,
      latitude: 55.474162,
      longitude: 9.491851,
      description: "Hvor mange væksthuse har Geografisk Have?",
      question: "Hvor mange væksthuse har Geografisk Have?",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/væksthuset.jpg",
      info: "Nu skal I videre til væksthusene, hvor I kan finde jeres næste opgave blandt de eksotiske planter.",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/icon_plant.png",
    },
  });

  const task4 = await prismaClient.task.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Naturhaven",
      treasureHuntId: 1,
      latitude: 55.473834,
      longitude: 9.491494,
      description: "Hvilket dyr har deres eget hotel i Naturhaven?",
      question: "Hvilket dyr har deres eget hotel i Naturhaven?",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/naturehaven.png",
      info: "Turen går videre til Naturhaven, hvor jeres næste opgave venter. Mens I er der, hvorfor så ikke også kigge forbi den økologiske køkkenhave?",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/icon_plant.png",
    },
  });

  const task5 = await prismaClient.task.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: "Tumlehaven",
      treasureHuntId: 1,
      latitude: 55.473241,
      longitude: 9.491793,
      description: "Task 5 Description",
      question: "Hvad er navnet på caféen i Geografisk Have?",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/tumlehaven.jpg",
      info: "I er snart i mål med skattejagten! Gå videre til Tumlehaven Legeplads, hvor jeres opgave venter på jer.",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Legeplads.png",
    },
  });

  const task6 = await prismaClient.task.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      name: "Rosenhaven",
      treasureHuntId: 1,
      latitude: 55.472732,
      longitude: 9.492775,
      description: "Task 6 Description",
      question: "Hvilken blomst kan i finde i vores Rosenhave?",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/rosenhaven.jpg",
      info: "Jeres sidste eventyr stopper ved Rosenhave, hvor der findes mange forskellige slags roser. ",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Rosenhaven.png",
    },
  });

  const answer1 = await prismaClient.answer.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      taskId: 1,
      isCorrect: true,
      answer: "Bambus",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/bamboo.png",
    },
  });

  const answer2 = await prismaClient.answer.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      taskId: 1,
      isCorrect: false,
      answer: "Eg",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/oak.png",
    },
  });

  const answer3 = await prismaClient.answer.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      taskId: 1,
      isCorrect: false,
      answer: "Kastanje",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/chestnut.png",
    },
  });

  const answer4 = await prismaClient.answer.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      taskId: 2,
      isCorrect: false,
      answer: "Ko",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/cow.png",
    },
  });

  const answer5 = await prismaClient.answer.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      taskId: 2,
      isCorrect: true,
      answer: "Hest",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/horse.png",
    },
  });

  const answer6 = await prismaClient.answer.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      taskId: 2,
      isCorrect: false,
      answer: "Elefant",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/elephant.png",
    },
  });

  const answer7 = await prismaClient.answer.upsert({
    where: { id: 7 },
    update: {},
    create: {
      id: 7,
      taskId: 3,
      isCorrect: false,
      answer: "Et",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/1.png",
    },
  });

  const answer8 = await prismaClient.answer.upsert({
    where: { id: 8 },
    update: {},
    create: {
      id: 8,
      taskId: 3,
      isCorrect: false,
      answer: "To",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/2.png",
    },
  });

  const answer9 = await prismaClient.answer.upsert({
    where: { id: 9 },
    update: {},
    create: {
      id: 9,
      taskId: 3,
      isCorrect: true,
      answer: "Tre",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/3.png",
    },
  });

  const answer10 = await prismaClient.answer.upsert({
    where: { id: 10 },
    update: {},
    create: {
      id: 10,
      taskId: 4,
      isCorrect: true,
      answer: "Insekter",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/insekter.png",
    },
  });

  const answer11 = await prismaClient.answer.upsert({
    where: { id: 11 },
    update: {},
    create: {
      id: 11,
      taskId: 4,
      isCorrect: false,
      answer: "Høns",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/chicken.png",
    },
  });

  const answer12 = await prismaClient.answer.upsert({
    where: { id: 12 },
    update: {},
    create: {
      id: 12,
      taskId: 4,
      isCorrect: false,
      answer: "Katte",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/cat.png",
    },
  });

  const answer13 = await prismaClient.answer.upsert({
    where: { id: 13 },
    update: {},
    create: {
      id: 13,
      taskId: 5,
      isCorrect: true,
      answer: "Café Lykkefund",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/lykkefund.png",
    },
  });

  const answer14 = await prismaClient.answer.upsert({
    where: { id: 14 },
    update: {},
    create: {
      id: 14,
      taskId: 5,
      isCorrect: false,
      answer: "Café Rosa",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/rose1.png",
    },
  });

  const answer15 = await prismaClient.answer.upsert({
    where: { id: 16 },
    update: {},
    create: {
      id: 16,
      taskId: 6,
      isCorrect: false,
      answer: "Påskelilje",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/daffodil.png",
    },
  });

  const answer16 = await prismaClient.answer.upsert({
    where: { id: 17 },
    update: {},
    create: {
      id: 17,
      taskId: 6,
      isCorrect: false,
      answer: "Tulipan",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/tulip.png",
    },
  });

  const answer17 = await prismaClient.answer.upsert({
    where: { id: 18 },
    update: {},
    create: {
      id: 18,
      taskId: 6,
      isCorrect: true,
      answer: "Rose",
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/answers/rose2.png",
    },
  });

  const Poi1 = await prismaClient.poi.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Rosenhaven",
      description:
        "Er du blomsterelsker, havenørd eller bare fisk på en skøn grøn oplevelse, så tag på opdagelse i vores pris-belønnede botaniske have, der byder på 14 ha med mere end 2000 forskellige arter og sorter af træer, buske og blomster indsamlet fra det meste af verden og plantet efter oprindelsesland. \n \nHaven er som nævnt prisbelønnet for de smukke rosenhaver med mere end 300 forskellige roser både historiske, moderne og vilde roser.",
      latitude: 55.472741,
      longitude: 9.492773,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/rosenhaven.jpg",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Rosenhaven.png",
    },
  });
  const Poi2 = await prismaClient.poi.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: "Dyrefolden",
      description:
        "I dyrefolden kan I møde vores søde dyr, som er en del af Geografisk Have. ",
      latitude: 55.474475,
      longitude: 9.49227,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/dyrefolden.jpg",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Dyrefolden.png",
    },
  });

  const Poi3 = await prismaClient.poi.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: "Væksthusene",
      description: "væksthusene er fyldt med spændende planter fra hele verden",
      latitude: 55.474162,
      longitude: 9.491851,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/væksthuset.jpg",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/icon_plant.png",
    },
  });

  const Poi4 = await prismaClient.poi.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: "Naturhaven",
      description: "Naturhaven er fyldt med spændende planter fra hele verden",
      latitude: 55.473834,
      longitude: 9.491494,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/naturehaven.png",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/icon_plant.png",
    },
  });

  const Poi5 = await prismaClient.poi.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: "Tumlehaven",
      description: "Tumlehaven er fyldt med spændende planter fra hele verden",
      latitude: 55.473241,
      longitude: 9.491793,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/tumlehaven.jpg",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Legeplads.png",
    },
  });

  const Poi6 = await prismaClient.poi.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      name: "Legepladsen",
      description: "Legepladsen er fyldt med spændende planter fra hele verden",
      latitude: 55.474184,
      longitude: 9.491852,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/skattejagt/images/legeplads.jpg",
      iconURL: "https://geo-api.frannoflix.xyz/assets/icons/Legeplads.png",
    },
  });

  const badge1 = await prismaClient.badge.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      imageURL: "https://geo-api.frannoflix.xyz/assets/badges/BadgeKompas.png",
    },
  });

  const badge2 = await prismaClient.badge.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      imageURL:
        "https://geo-api.frannoflix.xyz/assets/badges/BadgeScavenger.png",
    },
  });

  const badge3 = await prismaClient.badge.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      imageURL: "https://geo-api.frannoflix.xyz/assets/badges/BadgeProfil.png",
    },
  });

  const user1 = await prismaClient.user.upsert({
    where: { id: "jDmGijfrzTN2OHKjKWoNlfOtc4Q2" },
    update: {},
    create: {
      id: "jDmGijfrzTN2OHKjKWoNlfOtc4Q2",
      points: 100,
      badges: {
        create: [
          {
            badgeId: 1,
            completed: true,
          },
          {
            badgeId: 2,
            completed: false,
          },
          {
            badgeId: 3,
            completed: false,
          },
        ],
      },
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
