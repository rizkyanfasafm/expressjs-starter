// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);

router.get('/product-list', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct)

// Ini untuk import satu saja
module.exports = router;

// Ini untuk import lebih dari satu
// exports.router = router;
// exports.products = products;