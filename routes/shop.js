const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
const products = adminData.products;

router.get('/', (req, res, next) => {
    // console.log(products);
    // Get path completely until routes
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    res.render('shop');
});

module.exports = router;