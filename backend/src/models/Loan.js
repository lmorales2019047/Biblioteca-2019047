const { Schema, model } = require("mongoose");

const LoanSchema = new Schema({
    startdate: Date,
    finaldate: Date,
    returned: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    bibliography: {
        type: Schema.Types.ObjectId,
        ref: "Bibliography"
    }
})

module.exports = model("Loan", LoanSchema);