"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const middleware = {};

const generateName = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-14) === ".middleware.js"
    );
  })
  .forEach((file) => {
    const controller = require(path.join(__dirname, file));
    middleware[
      generateName(file.substring(0, file.indexOf(".middleware.js")))
    ] = controller;
  });

module.exports = middleware;
