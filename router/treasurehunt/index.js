const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        treasureHunt: true,
        answers: true,
      },
    });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/start", async (req, res) => {
  try {
    const { id } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user.currentTaskId !== null) {
      const task = await prisma.task.findUnique({
        where: {
          id: user.currentTaskId,
        },
        include: {
          treasureHunt: true,
          answers: true,
        },
      });
      res.status(200).send(task);
      return;
    }

    const { currentTaskId } = await prisma.user.update({
      where: { id: id },
      data: {
        currentTaskId: 1,
      },
      select: {
        currentTaskId: true,
      },
    });

    const task = await prisma.task.findUnique({
      where: {
        id: currentTaskId,
      },
      include: {
        treasureHunt: true,
        answers: true,
      },
    });

    console.log(task);
    res.status(201).send(task);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/answer", async (req, res) => {
  try {
    const { id, answer } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        currentTaskId: true,
      },
    });
    const task = await prisma.task.findUnique({
      where: {
        id: user.currentTaskId,
      },
      include: {
        answers: true,
      },
    });
    const correctAnswer = task.answers.find((a) => a.isCorrect);
    const isCorrect = correctAnswer.id === answer;
    if (isCorrect) {
      const nextTask = await prisma.task.findFirst({
        where: {
          id: {
            gt: user.currentTaskId,
          },
        },
        include: {
          treasureHunt: true,
          answers: true,
        },
      });
      if (nextTask) {
        await prisma.user.update({
          where: { id: id },
          data: {
            currentTaskId: nextTask.id,
          },
        });
        res.status(200).send(nextTask);
      } else {
        await prisma.user.update({
          where: { id: id },
          data: {
            currentTaskId: null,
          },
        });
        res.status(200).send({ message: "treasurehunt completed" });
      }
    } else {
      res.status(200).send({ message: "Wrong answer" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        treasureHunt: true,
        answers: true,
      },
    });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
