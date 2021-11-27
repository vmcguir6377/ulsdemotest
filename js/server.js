const mysql = require('mysql2');
//const inputCheck = require('./utils/inputCheck');
const inquirer = require('inquirer');

//require("console.table");

//console.table(data, columns);
//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //username
        user: 'root',
        //sql password
        password: 'Drm71vmm77!',
        database: 'employees'
    },

    console.log("You are connected to the database."),
);