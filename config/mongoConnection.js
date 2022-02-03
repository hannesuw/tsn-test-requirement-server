const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://jojojo:Johannes1@cluster0.xmoeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db;

function run() {
  return client
    .connect()
    .then(() => {
      db = client.db("tsn_cms");
    })
    .catch((err) => {
      throw err;
    });
}

function getDatabase() {
  return db;
}

module.exports = { run, getDatabase };
