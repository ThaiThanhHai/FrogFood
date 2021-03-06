const Users = require("../models/Users");
const Recall = require("../models/Recall");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  // [GET] /users/
  async show(req, res, next) {
    try {
      const users = await Users.find();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] /users/login
  async register(req, res) {
    try {
      console.log(req.body);
      const user = await Users.find({ email: req.body.email });
      if (user.length !== 0)
        return res.status(409).send({ message: "Tài khoản đã tồn tại! " });

      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      await new Users({ ...req.body, password: hashPassword }).save();
      res.status(201).send({ message: "Tạo tài khoản thành công!" });
    } catch (err) {
      console.log(err);
      res.status(404).json("Lỗi server");
    }
  }

  // [GET] /users/login
  async login(req, res) {
    try {
      console.log(req.body);
      const User = await Users.find({ email: req.body.email });

      const passwordEncoded = await bcrypt.compare(
        req.body.password,
        User[0].password
      );
      if (!passwordEncoded) {
        res.status(401).send({ message: "Mật khẩu không chính xác" });
      }

      const token = jwt.sign({ _id: User._id }, process.env.JWT_PRIVATEKEY, {
        expiresIn: "1d",
      });
      res.status(200).send({
        username: User[0].username,
        email: User[0].email,
        image: User[0].image,
        phone: User[0].phone,
        address: User[0].address,
        isAdmin: User[0].isAdmin,
        token: token,
      });
    } catch (err) {
      // console.log(err);
      res.status(401).send("Email không chính xác");
    }
  }

  // [PUT] /users/update
  async update(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.body.id);
      const User = await Users.findByIdAndUpdate(
        { _id: req.body.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      console.log(User);
      res.status(200).json(User);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [PUT] /users/edit_info
  async editInfo(req, res, next) {
    try {
      console.log(req.body);
      const User = await Users.updateOne(
        { email: req.body.email },
        {
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
        },
        { new: true }
      );
      console.log(User);
      res.status(200).json(User);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [PUT] /users/change_password
  async changePassword(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.body.id);
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const User = await Users.findByIdAndUpdate(
        { _id: req.body.id },
        {
          password: hashPassword,
        },
        { new: true }
      );
      console.log(User);
      res.status(200).json(User);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [PUT] /users/userChangePassword
  async userChangePassword(req, res, next) {
    console.log(req.body);
    try {
      const checkUser = await Users.find({ email: req.body.email });

      const passwordEncoded = await bcrypt.compare(
        req.body.currentPass,
        checkUser[0].password
      );

      if (!passwordEncoded) {
        res.status(401).send({ message: "Mật khẩu không chính xác" });
      }

      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.newPass, salt);
      const User = await Users.updateOne(
        { email: req.body.email },
        {
          password: hashPassword,
        },
        { new: true }
      );
      console.log(User);
      res.status(200).json(User);
    } catch (error) {
      res.status(505).json(error);
    }
  }

  // [DELETE] /users/delete/2:id
  async delete(req, res, next) {
    try {
      await Users.deleteOne({ _id: req.params.id });
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }

  // [DELETE] /users/delete/:email
  async delete2(req, res, next) {
    console.log(req.params.email);
    try {
      await Users.deleteOne({ email: req.params.email });
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }

  // [POST] /users/recall
  async recall(req, res, next) {
    console.log(req.body);
    try {
      const checkUser = await Users.find({ email: req.body.email });

      const passwordEncoded = await bcrypt.compare(
        req.body.currentPass,
        checkUser[0].password
      );

      if (!passwordEncoded) {
        res.status(401).send({ message: "Mật khẩu không chính xác" });
      }
      const recall = new Recall({ email, reason });
      try {
        const saved = await recall.save();
        res.status(200).json(saved);
        console.log("Create Successfully");
      } catch (error) {
        res.status(500).json(error);
        console.log("Create failure");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserController();
