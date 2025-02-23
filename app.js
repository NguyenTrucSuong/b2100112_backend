const express = require("express");
const ApiError = require('./app/api-error');

const cors = require("cors");
const app  = express();
const contactsRouter = require("./app/routes/contact.route");
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);


app.use((req, res, next) => {

// Code here will run when no route is defined

// matches the request. Call next() to move to the error handling middleware

return next (new ApiError (404, "Resource not found"));

});

// define error-handling middleware last, after other app.use() and routes calls

app.use((err, req, res, next) => {


return res.status(error.statusCode || 500).json({

message: error.message || "Internal Server Error",

});

});
app.get("/", (req,res)=>{
    res.json({message: "Welcome to contact book application"})
});

module.exports= app;
