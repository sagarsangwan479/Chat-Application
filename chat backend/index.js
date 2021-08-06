require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const messageRoute = require("./routes/messages");
const app = express();


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => {
    console.log("DB Connected");
})
.catch(error => {
    console.log(error);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/",authRoutes);
app.use("/",messageRoute);

const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log(`server is running at ${port}`);
});
