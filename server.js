const express = require('express');
const path = require('path');
const routes = require("./routes");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.use(routes);


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



