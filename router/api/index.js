const router = require("express").Router();
const v1 = require("./v1");

module.exports = () => {
  router.use("/v1", v1(router));
  router.get("/test", (_, res) => res.send("Welcome to the API"));
  return router;
};
