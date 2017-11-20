const PROXY_CONFIG = {
    "/blue-hunter": {
        "target": process.env.ENDPOINT || "http://localhost:3000",
        "secure": false,
        "pathRewrite": {
            "^/blue-hunter": ""
        },
        "logLevel": "debug"
    }
}
module.exports = PROXY_CONFIG;