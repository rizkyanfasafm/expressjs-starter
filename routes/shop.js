const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
// const adminData = require("./admin");

const shopController = require('../controllers/shop');

const router = express.Router();

router.get("/", shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.cart);

router.post('/cart', shopController.postCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);

module.exports = router;
