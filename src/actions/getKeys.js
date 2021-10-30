const { fetchKeys } = require('../data/queries/getKeys');

async function getKeys(app, headers, postParams) {
  const apiResult = await fetchKeys(postParams);

  return { code: 0, msg: 'Success', records: apiResult };
}

module.exports = getKeys;
