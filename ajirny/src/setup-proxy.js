const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('http://localhost/ajirny-full/php/sign.php',
            {
                target: 'url',
                changeOrigin: true
            }
        )
    )
}