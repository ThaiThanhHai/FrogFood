const Carts = require("../models/Carts");
const Users = require("../models/Users");
const Dishes = require("../models/Dishes");

class CartController {
  // [POST] /Carts/create
  async create(req, res, next) {
    console.log(req.body);

    const User = await Users.find({ email: req.body.user });
    if (User.length === 0)
      return res.status(401).send({ message: "Chưa đăng nhập" });

    const Dish = await Dishes.find({ name: req.body.dish });
    if (Dish.length === 0)
      return res.status(405).send({ message: "Không có món này" });

    const newCart = new Carts({
      user: req.body.user,
      dish: req.body.dish,
      quantity: req.body.quantity,
      image: req.body.image,
      price: req.body.price,
      isPayment: req.body.isPayment,
    });

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
      console.log("Create Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
      console.log("Create failure");
    }
  }

  // [GET] /carts
  async show(req, res, next) {
    try {
      const cart = await Carts.find({ user: req.body.user });
      return res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] /dishes/delete/:id
  async delete(req, res, next) {
    try {
      await Dishes.deleteOne({ _id: req.params.id });
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = new CartController();
