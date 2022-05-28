const Dishes = require("../models/Dishes");

class DishController {
  // [POST] /Dishes/create
  async create(req, res, next) {
    console.log(req.body);
    // Check ID
    const Dish = await Dishes.find({ name: req.body.name });
    if (Dish.length !== 0)
      return res
        .status(409)
        .send({ message: "Lỗi! Tên món ăn đã có trong CSDL" });

    const newDish = new Dishes({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,
    });
    try {
      const savedDish = await newDish.save();
      res.status(200).json(savedDish);
      console.log("Create Successfully");
    } catch (error) {
      res.status(500).json(error);
      console.log("Create failure");
    }
  }

  // [GET] /dishes
  async show(req, res, next) {
    try {
      const dishes = await Dishes.find();
      return res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] /dishes/update
  async update(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.body._id);
      const Dish = await Dishes.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log(Dish);
      res.status(200).json(Dish);
    } catch (error) {
      res.status(505).json(error);
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

module.exports = new DishController();
