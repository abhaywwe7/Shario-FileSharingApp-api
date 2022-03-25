require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    process.env.connection_url,
    {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected to MongoDB!!!");
    }
  );
}

module.exports = connectDB;
