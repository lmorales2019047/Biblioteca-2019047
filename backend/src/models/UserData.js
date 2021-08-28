const { Schema, model } = require("mongoose");

const UserModel = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = model("UserData", UserModel);