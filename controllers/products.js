const Product = require('../models/product');

// const products = [];

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(res.body.title);
  product.save();
  // products.push({
  //   title: req.body.title,
  // });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // console.log(products);
  // Get path completely until routes
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = Product.fetchAll();
  console.log(products);
  res.render("shop", {
    prods: products,
    pageTitle: "My Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
  });
};
