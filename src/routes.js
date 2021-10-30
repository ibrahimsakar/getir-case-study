const { getKeys } = require('./actions/getKeys');
const { exceptionWrapper } = require('./utils/exceptionWrapper');

const routes = (router, app) => {
  // --------------------
  // -- KEYS
  // --------------------

  // POST /getKeys
  router.post('/getKeys', exceptionWrapper(async (req, res) => {
    const result = await getKeys(app, req.headers, req.body);

    res.status(200)
      .json(result);
  }));

  router.get('/health-check', (req, res) => {
    res.status(200).send();
  });
};

module.exports = routes;
