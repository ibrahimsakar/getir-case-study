const apiGetKeys = require('./actions/getKeys');

function fixErrorObjectResult(err) {
    const serialized = JSON.stringify(err, Object.getOwnPropertyNames(err));

    return JSON.parse(serialized);
}

const routes = (router, app) => {
    // --------------------
    // -- KEYS
    // --------------------

    // POST /getKeys
    router.post('/getKeys', async (req, res, next) => {
        console.log(req.body);
        const result = await apiGetKeys(app, req.headers, req.body);

        console.log(result);
        if (result.err) {
            res.status(500)
                .json(fixErrorObjectResult(result.err));

            return;
        }

        res.status(200)
            .json(result);
    });
}

module.exports = routes;
