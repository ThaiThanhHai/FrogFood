const Carts = require("../models/Carts");
const Users = require("../models/Users");
const Dishes = require("../models/Dishes");

class CartController {
  // [POST] /cart/payment
  async payment(req, res, next) {
    const currentUser = req.body.currentUser;
    const myCart = req.body.myCart;
    console.log(req.body);
    const checkUser = await Users.find({ email: currentUser.email });
    if (checkUser.length === 0) {
      return res.status(409).send({ message: "Tài khoản không tồn tại" });
    }

    const newCart = new Carts({
      customer: currentUser.customer,
      email: currentUser.email,
      phone: currentUser.phone,
      address: currentUser.address,
      note: currentUser.note,
      dishes: myCart,
      status: req.body.status,
    });

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
      console.log("Create Successfully");
    } catch (error) {
      res.status(500).json(error);
      console.log("Create failure");
    }
  }

  // [GET] /cart/
  async show(req, res, next) {
    try {
      const carts = await Carts.find();
      return res.status(200).json(carts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] /cart/confirm
  async confirm(req, res, next) {
    try {
      const updateCart = await Carts.findByIdAndUpdate(
        { _id: req.body._id },
        {
          status: "delivery",
        },
        { new: true }
      );
      console.log(updateCart);
      res.status(200).json(updateCart);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [PUT] /cart/delivery
  async delivery(req, res, next) {
    try {
      const updateCart = await Carts.findByIdAndUpdate(
        { _id: req.body._id },
        {
          status: "ok",
        },
        { new: true }
      );
      console.log(updateCart);
      res.status(200).json(updateCart);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [GET] /cart/orders
  async orders(req, res, next) {
    try {
      const carts = await Carts.find({
        email: req.params.email,
      });
      return res.status(200).json(carts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] /cart/day
  async getDay(req, res, next) {
    try {
      const carts = await Carts.find();
      const days = carts.map((item) => item.createdAt);
      return res.status(200).json(days);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new CartController();
