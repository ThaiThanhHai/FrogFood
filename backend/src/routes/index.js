const categoriesRouter = require("./categories/categories");
const databoardRouter = require("./databoard/databoard");

function route(app) {
  app.use("/api/categories", categoriesRouter);
  app.use("/api/databoard", databoardRouter);
}

module.exports = route;
