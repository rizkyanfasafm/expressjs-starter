const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageURL, price, description);
  product.save();
  // products.push({
  //   title: req.body.title,
  // });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    // Using Anonymous function
    // Using callback (sync)
    res.render("admin/product-list", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/product-list",
    });
  });
};
