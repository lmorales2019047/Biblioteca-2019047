const { Schema, model } = require("mongoose");

const MagazineDataSchema = new Schema({
    frecuency: Number,
    copies: Number,
    bibliography: {
        type: Schema.Types.ObjectId,
        ref: "Bibliography"
    }
})

module.exports = model("MagazineData", MagazineDataSchema);