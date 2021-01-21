const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        password: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"] 
        }
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;