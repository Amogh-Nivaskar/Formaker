if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userRoutes = require("./Routes/user");
const questionFormRoutes = require("./Routes/questionForm");
const ansFormRoutes = require("./Routes/ansForm");
const sendEmailRoutes = require("./Routes/sendEmail");

const { verifyToken } = require("./middleware/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["https://formaker-6ib3.vercel.app", "http://localhost:5173"],
  })
);

app.use("/", userRoutes);
app.use("/questionForm", verifyToken, questionFormRoutes);
app.use("/sendEmail", verifyToken, sendEmailRoutes);
app.use("/ansForm", ansFormRoutes);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connection succesfull");
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
