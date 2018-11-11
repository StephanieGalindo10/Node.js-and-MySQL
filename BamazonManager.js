var mysql = require('mysql');
var prompt = require('prompt');
var cTable = require('console.table');



// settings for mysql DB connection///
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root1234',
  database : 'bamazon_db'
});
////product sales///
function showOptions() {
	var menuOptions = ['1. View Products for Sale', '2. View Low Inventory', '3. Add to Inventory', '4. Add New Product'];
	console.log('Menu Options:');
	for(var i = 0; i < menuOptions.length; i++) {
		console.log(menuOptions[i]);
	}
	menuPrompt();
};

function menuPrompt() {

	// settings for prompt
	var schema = {
	  properties: {
	    number: {
	      message: 'Please select a menu option by number',
	      required: true
	    }
	  }
	};
///prompt//
	prompt.start();
	prompt.get(schema, function (err, result) {
        var num = result.number;
        console.log(result);
        console.log(num);
		checkSelected(num);
	});
};

function checkSelected(option) {
	switch(option) {
		case '1':
			console.log(1);
			listProducts();
			break;
		case '2':
			console.log(2);
			showLowInventory();
			break;
		case '3':
			console.log(3);
			addStock();
			break;
		case '4':
			console.log(4);
			addProduct();
			break;
		default:
			console.log('You did not enter a number for a menu option, please try again');
	};
};

function addStock(){
    var schema = {
        properties: {
          ItemID: {
            message: 'Enter the Item ID of the product you wish to add stock',
            required: true
          },
          quantity: {
            message: 'Enter the quantity you wish to add',
            required: true
          }
        }
      };

      connection.query('SELECT * FROM products', function(err,rows){
       
        console.table(rows);
        prompt.get(schema, function (err, result) {
            var newQuantity = result.quantity 
            console.log(result);
            connection.query('UPDATE products SET StockQuantity += ' + newQuantity + " WHERE ItemID= " + result.ItemID, function(err, rows){
                console.log(rows);
                console.log(err);
                console.log('results from update');
            })
            
            
        });
    });
    
   
}

function listProducts(){
   
    connection.query('SELECT * FROM products', function(err,rows){
       
        console.table(rows);
    });
}

function showLowInventory (){
    
     
    connection.query('SELECT * FROM products WHERE StockQuantity < 10', function(err, rows){
        console.log('Low Quantity Items List');
        console.table(rows)
    });
}


showOptions();
///need to contuine//