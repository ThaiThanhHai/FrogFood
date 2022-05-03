const usersRouter = require("./users/users");
const categoriesRouter = require("./categories/categories");
const dishesRouter = require("./dishes/dishes");
const cartsRouter = require("./carts/carts");
const databoardRouter = require("./databoard/databoard");

function route(app) {
  app.use("/api/users", usersRouter);
  app.use("/api/categories", categoriesRouter);
  app.use("/api/dishes", dishesRouter);
  app.use("/api/cart", cartsRouter);
  app.use("/api/databoard", databoardRouter);
}

module.exports = route;
