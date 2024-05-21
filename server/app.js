// Import All Dependencies
console.clear();
const cors= require("cors");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
// const jwt = require("jsonwebtoken");


const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.use('/photoimgs', express.static(path.join(__dirname, 'photoimgs')));
app.use("/api/user", require ('./routes/User'));
app.use("/api/produit/upload",require("./routes/PhotoImgsUpload"));
app.use("/api/produit",require ('./routes/Offers') )
app.use("/api/message", require('./routes/Message'))



// Run server
app.listen(port, () => {
    console.log("Server is Listening");
  });