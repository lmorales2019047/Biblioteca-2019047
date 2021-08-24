const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserModel = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    role: {
        type: Schema.Types.ObjectId,
        rel: "Role"
    }
});

UserModel.statics.encryptPassword = async function(password) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt)
}

UserModel.statics.comparePassword = function(password, receivedPassword) {
    return bcrypt.compare(password, receivedPassword);
}

module.exports = model("User", UserModel);