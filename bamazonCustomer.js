var mysql = require('mysql');
var prompt = require('prompt');



//connecting to the MySQL DB//
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root1234',
  database : 'bamazon'
});



// prompt that will be given to customer// second messages//
var schema = {
    properties: {
      ItemID: {
        message: 'Enter the Item ID of the product you wish to purchase today',
        required: true
      },
      quantity: {
        message: 'Enter the quantity you wish to purchase today',
        required: true
      }
    }
  };
  