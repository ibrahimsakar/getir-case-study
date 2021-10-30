// load .env file
require('dotenv-flow').config();

const { fetchKeys } = require('../data/queries/getKeys');

describe('Tests', () => {
  it('it should fetch keys', async () => {
    const requestParameters = {
      startDate: '2016-01-26',
      endDate: '2016-02-03',
      minCount: 1000,
      maxCount: 3000,
    };

    const keys = await fetchKeys(requestParameters);

    const mockKeys = [
      {
        key: 'ROYQdRsl',
        createdAt: new Date('2016-02-01T01:28:55.141Z'),
        totalCount: 2424,
      },
      {
        key: 'ZpoHRnZT',
        createdAt: new Date('2016-01-29T13:18:38.649Z'),
        totalCount: 2337,
      },
      {
        key: 'bxoQiSKL',
        createdAt: new Date('2016-01-29T01:59:53.494Z'),
        totalCount: 2991,
      },
      {
        key: 'NOdGNUDn',
        createdAt: new Date('2016-01-28T07:10:33.558Z'),
        totalCount: 2813,
      },
    ];

    expect(JSON.stringify(keys)).toBe(JSON.stringify(mockKeys));
  });
});
