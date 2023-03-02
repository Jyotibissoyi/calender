//<----------------------< Importing : Packages >---------------------->//
const mongoose = require("mongoose");
//<----------------------< Create : UserSchema >----------------------->//
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name"],
        },
        email: {
            type: String,
            required: [true, "Please provide your E-mail"],
            unique: true,
        },

        phone: {
            type: String,
            required: [true, "Please provide your phone number"],
            unique: true
        },

        password: {
            type: String,
            required: [true, "Please provide the password"],
        }
    }, { timestamps: true }
);

//<----------------------< Exports : UserModel >----------------------->//
module.exports = mongoose.model("user", UserSchema);