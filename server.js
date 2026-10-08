require("dotenv").config(); // Load environment variables first
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const serverless = require("serverless-http");
const MongoStore = require("connect-mongo");

const app = express();
// Use the PORT from .env if available, otherwise fallback to 3000
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas using the secure environment variable
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Successfully connected to MongoDB Atlas!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: { secure: false },
  }),
);

const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
module.exports.handler = serverless(app);
