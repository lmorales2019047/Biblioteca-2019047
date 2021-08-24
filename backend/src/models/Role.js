const { Schema, model } = require("mongoose");

const RoleModel = new Schema({
    role: {
        type: String,
        unique: true
    }
});

module.exports = model("Role", RoleModel);