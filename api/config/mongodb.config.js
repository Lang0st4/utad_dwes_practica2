//Import
const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

//MongoDB connnection
const dbConnect = async () => {
    console.log("Initializing MongoDB connection...")
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    }
    catch(err) {
        console.err("MongoDB connection failed :\n" + err);
        process.exit(1);
    }
};

//Export
module.exports = dbConnect;