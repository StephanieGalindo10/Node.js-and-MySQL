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
  ///show inventory//
  function showInventory() {
    connection.query('SELECT ItemID, ProductName, Price FROM products', function(err, rows, fields) {
      if (err) throw err;
      
      console.log('Available products:');
    for(var i = 0; i < rows.length; i++) {
      console.log('Item ID: ' + rows[i].ItemID + '   Product Name: ' + rows[i].ProductName + '   Price: $' + rows[i].Price);
    }
    runPrompt();
  });
};

function runPrompt() {
    prompt.start();

    prompt.get(schema, function(err, result) {
      var orderedProductID = result.ItemID;
      var orderQuantity = result.quantity;
      processOrder(orderedProductID, orderQuantity);
    });
  }