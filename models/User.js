const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

class User {
  static users() {
    const db = getDatabase();
    return db.collection("users");
  }

  static findAll() {
    return this.users().find({}).toArray();
  }

  static findById(id) {
    return this.users().findOne({ _id: ObjectId(id) });
  }

  static create(data) {
    const { name, email, phone, category } = data;
    if (!name) throw { name: "emptyName" };
    if (!email) throw { name: "emptyEmail" };
    if (!phone) throw { name: "emptyPhone" };
    if (!category) throw { name: "emptyCategory" };

    return this.users().insertOne(data);
  }

  static edit(id, data) {
    const { name, email, phone, category } = data;
    if (!name) throw { name: "emptyName" };
    if (!email) throw { name: "emptyEmail" };
    if (!phone) throw { name: "emptyPhone" };
    if (!category) throw { name: "emptyCategory" };

    return this.users().updateOne({ _id: ObjectId(id) }, { $set: data });
  }

  static deleteById(id) {
    return this.users().deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = User;
