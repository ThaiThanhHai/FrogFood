const Categories = require("../models/Categories");

class CategoryController {
  // [POST] /categories/create
  async create(req, res, next) {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name;
    const image = req.body.image;
    console.log(id, name, image);

    // Check ID
    const Cat = await Categories.find({ id: id });
    if (Cat.length !== 0)
      return res
        .status(409)
        .send({ message: "Lỗi! Loại món ăn đã có trong CSDL" });

    const newCat = new Categories({ id, name, image });
    try {
      const savedCat = await newCat.save();
      res.status(200).json(savedCat);
      console.log("Create Successfully");
    } catch (error) {
      res.status(500).json(error);
      console.log("Create failure");
    }
  }

  // [GET] /categories
  async show(req, res, next) {
    try {
      const cats = await Categories.find();
      return res.status(200).json(cats);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] /categories/:itemId
  async showItemID(req, res, next) {
    try {
      // console.log(req.params.itemId);
      const cats = await Categories.find({ id: req.params.itemId });
      return res.status(200).json(cats);
    } catch (err) {
      res.status(500).json(error);
    }
  }

  // [PUT] /categories/update
  async update(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.body._id);
      const updatedCats = await Categories.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log(updatedCats);
      res.status(200).json(updatedCats);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [DELETE] /categories/delete/:id
  async delete(req, res, next) {
    try {
      await Categories.deleteOne({ _id: req.params.id });
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = new CategoryController();
