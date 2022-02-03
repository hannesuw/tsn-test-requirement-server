const User = require("../models/User");

class usersController {
  static async users(req, res) {
    try {
      const users = await User.findAll();
      console.log(users);
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async findById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) throw { name: "userNotFound" };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async createUser(req, res, next) {
    try {
      const { name, email, phone, category } = req.body;
      const userData = {
        name,
        email,
        phone,
        category,
      };

      const user = await User.create(userData);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async editUser(req, res, next) {
    try {
      const { id } = req.params;
      const { name, email, phone, category } = req.body;
      const userData = {
        name,
        email,
        phone,
        category,
      };

      const user = await User.edit(id, userData);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) throw { name: "userNotFound" };

      await User.deleteById(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = usersController;
