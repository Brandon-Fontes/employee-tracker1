const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");
const { default: userEvent } = require('@testing-library/user-event');
const routes = require("./routes");
const mongoose = require('mongoose');
const app = express();





app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
    preflightContinue: true,
  })
);
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8080;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/registerdusers", {
    useNewUrlParser: true,
  useFindAndModify: false
  }
  
  
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});


app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});



