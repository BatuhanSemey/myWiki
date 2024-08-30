const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');


const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 9000;
const db = process.env.DB_URL || 'mongodb+srv://Batuhan:subaru667@batuhan.ucjhrg3.mongodb.net/Wiki?retryWrites=true&w=majority&appName=Batuhan';

const app = express()
app.use(cors());

const routesData = require('./routes/data-routes')

// Middleware для парсинга JSON
app.use(bodyParser.json());


// Обслуживание статических файлов Vue.js
app.use(express.static(path.join(__dirname, '../dist')));

app.use(routesData)


//Подключение к серверу
app.listen(port, () => {
    console.log(`Сервер стартовал на порту http://localhost:${port}`);
})

//Подключение к БД
mongoose
    .connect(db)
    .then((res) => console.log('DB Connect'))
    .catch((error) => console.log(error))

