const mongoose = require("mongoose");
const { findRenderedDOMComponentWithClass } = require("react-dom/test-utils");
const db = require("../models");

mongoose.connect("mongodb://localhost/registerdusers");

const registerSeed = [
  {
    firstName: "Stephen",
    lastName: "Clark",
  },
  {
    firstName: "Johnny",
    lastName: "Lawrence",
  },
  {
    firstName: "Daniel",
    lastName: "Larusso",
  },
];


const salarySeed = [
  {
    firstName: "Stephen",
    lastName: "Clark",
    salary: 34
  },
  {
    firstName: "Johnny",
    lastName: "Lawrence",
    salary: 34

  },
  {
    firstName: "Daniel",
    lastName: "Larusso",
    salary: 34

  },
];

db.Register.remove({})
  .then(() => db.Register.collection.insertMany(registerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });



db.Salary.remove({})
  .then(() => db.Salary.collection.insertMany(salarySeed))
  .then((data) => {
    console.log(data.result.n + " salary records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });