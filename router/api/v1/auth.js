const router = require("express").Router();
const { register } = require("../../../controllers/AuthController");

module.exports = () => {
  router.post("/register", register);
  return router;
};
