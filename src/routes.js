const { body, validationResult } = require('express-validator');

const { getKeys } = require('./actions/getKeys');
const { exceptionWrapper } = require('./utils/exceptionWrapper');

const routes = (router, app) => {
  // --------------------
  // -- KEYS
  // --------------------

  // POST /getKeys
  router.post(
    '/getKeys',
    body('startDate').not().isEmpty(),
    body('endDate').not().isEmpty(),
    body('minCount').not().isEmpty(),
    body('maxCount').not().isEmpty(),
    exceptionWrapper(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400)
          .json({ errors: errors.array() });
      }

      const result = await getKeys(app, req.headers, req.body);

      res.status(200)
        .json(result);
    }),
  );

  router.get('/health-check', (req, res) => {
    res.status(200).send();
  });
};

module.exports = routes;
