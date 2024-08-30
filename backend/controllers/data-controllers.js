const Data = require('../models/Data')
const path = require('path')

const mainRout = (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
}

const getApp = (req, res) => {
    const name = req.query.name
    console.log('Received name:', name);

    Data
        .findOne({ category: name })
        .then((data) => {
            console.log('Данные:', data);
            if (!data) {
                return res.status(404).json({ message: 'Не найден объект' });
            }
            res.json({ message: 'Данные успешно найдены', data });
        })
        .catch((error) => {
            console.error('Ошибка в get запросе:', error);
            res.status(500).json({ message: 'Internal Server Error', error });
        });
}

module.exports = {
    mainRout,
    getApp
}