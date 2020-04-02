const express = require('express');
const bodyparser = require('body-parser');
const mysqlconnection = require("./connection");
const PeopleRoutes = require("./routes/people");

var app = express();
//Configuring express server
app.use(bodyparser.json());
app.use("/people", PeopleRoutes);


//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));