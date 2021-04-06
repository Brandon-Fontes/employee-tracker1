const express = require('express');
const path = require('path');
const cors = require("cors");
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
  app.use(express.static('client/build'));
}

app.use(express.static(path.join(__dirname, 'client/build')));
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



