const express = require("express");
const Router = express.Router();
const mysqlconnection = require("../connection");

Router.get("/", (req, res)=>{
    mysqlconnection.query("Select * from people", (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }

    })

})

/*
app.post('/learners', (req, res) => {
    mysqlconnection.query("insert into people values ('tiburcio,69')", (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }

    })

});
*/
module.exports = Router;

