module.exports = (router) => {
  router.get("/status", (_, res) => res.sendStatus(200));
  return router;
};
