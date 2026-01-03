// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// MongoDB Connection
const dbConnect = require("./api/config/mongodb.config");
const PORT = process.env.PORT || 3000;

// Web Server Setup
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./api/routes"));

// Initialize App
const startServer = async () => {
  try {
    console.log("Initializing MongoDB connection...");
    await dbConnect();

    const server = app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}...`);
    });

    server.on("error", (err) => {
      console.error("Server failed to start");
      console.error(err);
    });

  } catch (err) {
    console.error("MongoDB connection failed");
    console.error(err);
    process.exit(1);
  }
};

startServer();