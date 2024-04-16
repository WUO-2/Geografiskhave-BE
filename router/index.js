const express = require("express");
const api = require("./api");
const status = require("./status");

const router = express.Router();

module.exports = () => {
  router.use("/api", api());
  status(router);
  router.get("/", (_, res) => res.send("Welcome to the API"));
  return router;
};
