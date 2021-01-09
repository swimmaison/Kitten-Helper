const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kittenhelper",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const kittenSeed = [
    {
        name: "mike meyers",
        breed: "some breed",
        age: 2,
        weight: 3
    }
];

db.Kittens
  .remove({})
  .then(() => db.Kittens.collection.insertMany(kittenSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
