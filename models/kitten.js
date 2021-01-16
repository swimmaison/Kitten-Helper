const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const fs = require("fs");

const kittenSchema = new Schema({
    name: {
        type: String,
    },
    breed: {
        type: String,

    },
    age: {
        type: Number,

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
        },
    }
    // image: {
    //     image: Buffer,
    //     type: String
    // }
})

const Kitten = mongoose.model("Kitten", kittenSchema);

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

module.exports = Kitten;