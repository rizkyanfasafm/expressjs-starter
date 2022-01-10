const fs = require("fs");
const path = require("path");
// const products = [];

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductFromFile = (cb) => {
  // Callback as function
  // Will be read file
  fs.readFile(p, (err, fileContent) => {
    //   If error it indicates that file is not found or empty, so we'll return callback empty array
    if (err) {
      // Return callback empty array
      cb([]);
    } else {
      // If file has a content, we'll return callback content from file
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  // Every calling class Product we must passing a value
  constructor(title, imageURL, price, description) {
    // And this value, will be save in temp memory
    this.title = title;
    this.imageURL = imageURL;
    this.price = price;
    this.description = description;
  }

  save() {
    // Create unique ID
    this.id = Math.random().toString();
    // If we want save a product, we must get all product from file, therefore we use getProductFromFile method
    getProductFromFile((products) => {
      // We must use callback for wait a process to read file
      products.push(this);
      // products will generate a array that have a list of title and added title in temp memory to add this temp producst (array)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        // We want overwrite content in file product.js
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    // This is use callback to wait result form getProductFromFile method
    // Callback as argument
    getProductFromFile(cb);
  }
};
