const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push({
        'title': req.body.title
    })
    res.redirect('/');
})

// Ini untuk import satu saja
// module.exports = router;

// Ini untuk import lebih dari satu
exports.router = router;
exports.products = products;