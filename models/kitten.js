const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const fs = require("fs");

const kittenSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String

  },
  birthdate: {
    type: String
  },
  weights: {
    date: {
      type: Number
    },
    weight: {
      type: Number
    }
  },
  feedings: {
    date: {
      type: Number
    },
    amount: {
      type: Number
    },
    quality: {
      type: String
    }
  }

})

const Kitten = mongoose.model('Kitten', kittenSchema)
module.exports = Kitten
