const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const async = require("async");
const fs = require("fs");

const kittenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    image: {
        image: Buffer,
        type: String
    }
})

const Kittens = mongoose.model("Kittens", kittenSchema);

// async.series([
//     (callback) => 
//     async.each(mongoose.models, (model, callback) =>
//     model.remove({}, callback), callback),

//     (callback) => async.waterfall([
//         (callback) => fs.readFile('./burger.png', callback),

//        (data, callback) => {
//            let base64 = data.toString("base64");
//            console.log(base64.substr(0,200));

//            let cats = new Buffer(base64, "base64")
//            Kittens.create({
//                "title": "cats",
//                "image": cats
//            }, callback)
//        },

//        (kitten, callback) => Kittens.findOne().exec(callback),
//        (kitten, callback) => {
//            console.log(kitten);
//            fs.writeFile("./output.png", kitten.image, callback)
//        }
//     ], callback)
    
// ], err => {
//     if (err) throw err;
//     mongoose.disconnect();
// })

module.exports = Kittens;