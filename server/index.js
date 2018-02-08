"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const moment        = require("moment");

const MONGODB_URI = "mongodb://localhost:27017/tweeter"
const MongoClient = require("mongodb").MongoClient;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let dbInstance;
// The in-memory database of tweets. It's a basic object with an array in it.
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err){
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  } else {

 const DataHelpers = require("./lib/data-helpers.js")(db);
 const tweetsRoutes = require("./routes/tweets")(DataHelpers);
 app.use("/tweets", tweetsRoutes);
  }
process.on('SIGTERM', ()=> {console.log("Mongo close"); db.close()}) //
process.on('SIGINT', ()=> {console.log("Mongo close"); db.close()})

})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
