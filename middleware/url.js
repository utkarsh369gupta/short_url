
const fs = require('fs')

function logReqRes(filename) {
    return (req, res, next) => {
        const log = `\n${Date.now()}  ${req.path}  ${req.method}`;
        fs.appendFile(filename, log, (err, data) => {
            if (err) {
                res.status(404).send({ status: "Middleware is encountering technical difficulties." });
            }
        })
        next();
    }
}

module.exports = logReqRes