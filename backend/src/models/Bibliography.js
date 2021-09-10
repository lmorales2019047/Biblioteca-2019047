const { Schema, model } = require("mongoose");

const BibliographySchema = new Schema({
    author: String,
    title: String,
    edition: String,
    description: String,
    copies: Number,
    stock: Number,
    keywords: [{
        word: String
    }],
    subjects: [{
        subject: String
    }],
    type: {
        type: Schema.Types.ObjectId,
        ref: "BibliographyType"
    }
})

module.exports = model("Bibliography", BibliographySchema);