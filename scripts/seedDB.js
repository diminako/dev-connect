const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/devconnect"
);

const devProfile = [
  {
    username: "Dimitri",
    password: "password"
  }
];

db.Devs
  .remove({})
  .then(() => db.Devs.collection.insertMany(devProfile))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
