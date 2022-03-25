const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const connectDB = require("./config/db");
connectDB();

//template engine here
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
// ROutes area
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
