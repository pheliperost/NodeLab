const express = require("express");
const Router = express.Router();
const mysqlconnection = require("../connection");

Router.get("/", (req, res)=>{
    mysqlconnection.query("Select * from people", (err,rows,fields)=>{
        if(!err){

        }else{
            console.log(err);
        }

    })

})

module.exports = Router;

