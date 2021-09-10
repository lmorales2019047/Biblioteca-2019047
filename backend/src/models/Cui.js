const { Schema, model } = require("mongoose");

const CuiSchema = new Schema({
    cui: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = model("Cui", CuiSchema);