const { Schema, model } = require("mongoose");

const BibliographyTypeSchema = new Schema({
    type: String
})

module.exports = model("BibliographyType", BibliographyTypeSchema);