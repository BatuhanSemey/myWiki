const express = require('express')
const router = express.Router()

const {
    mainRout,
    getApp
} = require('../controllers/data-controllers');

router.get('/select-app', getApp);
router.get('/', mainRout);

module.exports = router;