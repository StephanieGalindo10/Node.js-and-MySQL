/// the sql that was used for databased//



DROP DATABASE IF EXISTS bamazon_DB;

CREATE database bamazon_DB;

USE bamazon_DB;


CREATE TABLE Products
 (ItemID int AUTO_INCREMENT PRIMARY KEY, 
 ProductName varchar(30), 
 DepartmentName varchar(30),
 Price decimal(6,2),
 StockQuantity int);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Brave New World', 'Books', 10.95, 37);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Playstation 4', 'Electronics', 300.00, 18);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('MacBookPro', 'Electronics', 1149.99, 7);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('High Efficie Front Load Washer ', 'Appliances', 599.99, 22);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Beats Headphones', 'Electronics', 249.97, 4);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Nike Shoes', 'Footwear', 80.59, 65);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Anime Figure', 'toys', 159.50, 94);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('Brown Teddy Bear', 'toy', 15.99, 29);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('TIFFANY Necklace', 'Jewlery', 375.76, 6);

INSERT INTO products (productname, departmentname, price, stockquantity) VALUES ('The Cather in the Rye', 'Books', 09.99, 15);


