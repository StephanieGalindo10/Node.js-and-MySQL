var mysql = require('mysql');
var prompt = require('prompt');
var cTable = require('console.table');

//connecting to the MySQL DB//
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'bamazon_db'
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

      
      console.table(rows);
    
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

  function processOrder(id, quantity) {
      
    connection.query('SELECT StockQuantity FROM products WHERE ItemID = ?', [id], function(err, rows, fields) {
      if(err) throw err;
      
      if(JSON.parse(rows[0].StockQuantity) >= quantity) {
        var adjQuantity = rows[0].StockQuantity - quantity;
        getPrice(id, quantity);
        updateStock(adjQuantity, id);
      } else {
        console.log('Oops,There is not enough stock to fulfill your request, please try again');
        connection.end();
      }
    });
  }
  


  function getPrice(id, quantity) {
    connection.query('SELECT Price FROM products WHERE ItemID = ?', [id], function(err, rows, fields) {
      if(err) throw err;
      var orderPrice = JSON.parse(rows[0].Price) * quantity;
      console.log('The total order cost is: $' + orderPrice);
    });
  }
  
  function updateStock(adjQuantity, id) {
    connection.query('UPDATE products SET stockQuantity = ? WHERE ItemID = ?', [adjQuantity, id], function(err, rows, fields) {
      if(err) throw err;
      console.log('Inventory has been updated');
      connection.end();
    });
  }
  

  showInventory();