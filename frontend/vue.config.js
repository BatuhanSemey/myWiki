module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000', // Порт вашего сервера Node.js
                changeOrigin: true,
                pathRewrite: { '^/api': '' }, // Убирает /api из пути запроса
            },
        },
    },
};