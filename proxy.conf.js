const PROXY_CONFIG = {
    "/dev": {
        "target": "http://localhost:3000",
        "secure": false,
        "pathRewrite": {
            "^/dev": ""
        },
        "logLevel": "debug"
    },
    "/prod": {
        "target": 'http://localhost:3000',
        "secure": false,
        "pathRewrite": {
            "^/prod": ""
        },
        "logLevel": "debug"
    },
}
module.exports = PROXY_CONFIG;