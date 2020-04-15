let express = require('express')
require("express-async-errors");
let app = express();
let mongoose = require("mongoose");
const bodyparser = require("body-parser")
const morgan = require("morgan") //for view the details of running time
//require("./mongo")  //return data from mongo.js file
var port = process.env.PORT || 4002;


//require("./model/Post")
// const Post = mongoose.model("nb") //model means database structure



// //middleware
// app.use(bodyparser.json())
// app.use(morgan())
app.use("/NBProject", require("./routes/posts"))

//Routes not found
app.use((req, res, next) =>{
     req.status = 404;
     const error =  new error("Rooutes not found")
     next(error);
})
//error handler
app.use((error, req, res, next) =>{
     res.status(req.status || 500).send({
          message : error.message,
          stack: error.stack
     })
})
// // Setup server port

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running  on port " + port);
});


