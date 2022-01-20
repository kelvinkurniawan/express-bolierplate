module.exports = (app) => {
  const fs = require("fs");
  const path = require("path");
  const basename = path.basename(__filename);

  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 &&
        file !== basename &&
        file.slice(-9) === ".route.js"
      );
    })
    .forEach((file) => {
      require(path.join(__dirname, file))(app);
    });
};
