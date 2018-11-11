var mysql = require('mysql');
var prompt = require('prompt');

// settings for mysql DB connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root1234',
  database : 'bamazon'
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

	prompt.start();
	prompt.get(schema, function (err, result) {
		var num = result.number;
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

///need to contuine//