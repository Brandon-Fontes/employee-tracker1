const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true },
    emailId: {type: String, required: true},
    contact: {type: String, required: false},
    gender: {type: String, required: true},
    salary: {type: Number, required: false}


});

const Register = mongoose.model("Register", regSchema);

module.exports = Register;