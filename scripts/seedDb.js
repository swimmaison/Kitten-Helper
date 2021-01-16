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
      name: "Kitten 1",
    breed: "American Shorthair",
    birthdate: Date(2020, 12, 12),
    weights: {
        date: Date(),
        weight: 80
    },
    feedings: {
        date: Date(),
        amount: 80,
        quality: "Normal",
    }
    }];

db.Kitten
  .remove({})
  .then(() => db.Kitten.collection.insertMany(kittenSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
