var mysql = require('mysql');
var prompt = require('prompt');

//connecting to the MySQL DB//
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root1234',
  database : 'bamazon'
});

