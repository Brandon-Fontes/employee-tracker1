const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true },
    bankName: {type: String, required: false},
    accountNo: {type: String, required: false},
    salary: {type: Number, required: false},
    ssn: {type: String, required: false},
});

const Salary = mongoose.model("Salary", regSchema);

module.exports = Salary;