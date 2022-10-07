require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users");
const userRecordsRoutes = require("./routes/records");
const challengesRoutes = require("./routes/challenges");

// initiate express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/users", usersRoutes);
app.use("/api/user-entries", userRecordsRoutes);
app.use("/api/challenges", challengesRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
