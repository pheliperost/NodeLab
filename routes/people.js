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

//Router to GET specific learner detail from the MySQL database
Router.get('/:id' , (req, res) => {
    mysqlconnection.query('SELECT * FROM people WHERE age = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );


Router.post('/Insert', (req, res) => {
    let people = req.body;
    var sql = "SET @name = ?; SET @age = ?; call peopleAdd(@name,@age);";

//CALL learnerAddOrEdit(@name,@age);";
    mysqlconnection.query(sql, [people.name, people.age], (err, rows, fields) => {
        if (!err)
        rows.forEach(element => {
        if(element.constructor == Array)
        res.send('New People Added : '+ element[0].name);
        });
        else
        console.log(err);
        })
});

module.exports = Router;

