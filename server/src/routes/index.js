const usersRouter = require("./users/users");
const categoriesRouter = require("./categories/categories");
const databoardRouter = require("./databoard/databoard");

function route(app) {
  app.use("/api/users", usersRouter);
  app.use("/api/categories", categoriesRouter);
  app.use("/api/databoard", databoardRouter);
}

module.exports = route;
