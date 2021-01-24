const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/kittenhelper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)

const kittenSeed = [{
  name: 'Kitten 1',
  description: 'Tabby',
  birthdate: '2021-12-10',
  gender: 'male',
  weights: [{
    date: '2021-01-18',
    weight: 80
  }, {
    date: '2021-01-19',
    weight: 100
  }],
  feedings: [{
    date: '2021-01-18',
    amount: 80,
    quality: 'Normal'
  }, {
    date: '2021-01-19',
    amount: 100,
    quality: 'Normal'
  }]
}]

db.Kitten
  .remove({})
  .then(() => db.Kitten.collection.insertMany(kittenSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
