const Product = require('../models/product');

// const products = [];

exports.getProducts = (req, res, next) => {
  // console.log(products);
  // Get path completely until routes
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    console.log(product);
    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Detail ' + product.title,
      path: '/products'
    });
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "My Shop",
      path: "/",
    });
  });
}

exports.cart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
}