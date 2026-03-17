USE ASSIG
CREATE TABLE customers (
customer_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
phone VARCHAR(20),
email VARCHAR(100),
street VARCHAR(100),
city VARCHAR(50),
state VARCHAR(50),
zip_code VARCHAR(10)
);
CREATE TABLE orders (
order_id INT PRIMARY KEY,
customer_id INT,
order_status INT,
order_date DATE,
required_date DATE,
shipped_date DATE,
store_id INT,
staff_id INT
);
CREATE TABLE brands (
brand_id INT PRIMARY KEY,
brand_name VARCHAR(255)
);
CREATE TABLE categories (
category_id INT PRIMARY KEY,
category_name VARCHAR(255)
);
CREATE TABLE products (
product_id INT PRIMARY KEY,
product_name VARCHAR(255),
brand_id INT,
category_id INT,
model_year INT,
list_price DECIMAL(10,2)
);
CREATE TABLE stores (
store_id INT PRIMARY KEY,
store_name VARCHAR(255),
phone VARCHAR(25),
email VARCHAR(255),
street VARCHAR(255),
city VARCHAR(255),
state VARCHAR(50),
zip_code VARCHAR(10)
);
CREATE TABLE order_items (
order_id INT,
item_id INT,
product_id INT,
quantity INT,
list_price DECIMAL(10,2),
discount DECIMAL(4,2),
PRIMARY KEY (order_id, item_id)
);
CREATE TABLE stocks (
store_id INT,
product_id INT,
quantity INT,
PRIMARY KEY (store_id, product_id)
);
INSERT INTO customers VALUES
(1,'Rahul','Sharma','9876543210','rahul@gmail.com','MG Road','Hyderabad','Telangana','500001'),
(2,'Anita','Reddy','9876543211','anita@gmail.com','Banjara Hills','Hyderabad','Telangana','500034'),
(3,'Kiran','Kumar','9876543212','kiran@gmail.com','Kukatpally','Hyderabad','Telangana','500072'),
(4,'Priya','Verma','9876543213','priya@gmail.com','Ameerpet','Hyderabad','Telangana','500016'),
(5,'Arjun','Naidu','9876543214','arjun@gmail.com','Madhapur','Hyderabad','Telangana','500081');

INSERT INTO stores VALUES
(1,'City Bike Store','9000000001','citybike@gmail.com','Main Road','Hyderabad','Telangana','500001'),
(2,'Super Cycle Store','9000000002','supercycle@gmail.com','Market Street','Hyderabad','Telangana','500002');

INSERT INTO brands VALUES
(1,'Hero'),
(2,'Honda'),
(3,'Yamaha'),
(4,'Trek');

INSERT INTO categories VALUES
(1,'Mountain Bikes'),
(2,'Road Bikes'),
(3,'Electric Bikes'),
(4,'Kids Bikes');

INSERT INTO products VALUES
(1,'Hero Ranger',1,1,2022,15000.00),
(2,'Honda Speedster',2,2,2023,18000.00),
(3,'Yamaha Electric Pro',3,3,2024,45000.00),
(4,'Trek Kids Bike',4,4,2021,8000.00),
(5,'Hero Mountain King',1,1,2023,20000.00);

INSERT INTO orders VALUES
(101,1,1,'2024-01-10','2024-01-15','2024-01-13',1,1),
(102,2,2,'2024-02-05','2024-02-10','2024-02-08',2,2),
(103,3,1,'2024-03-01','2024-03-06','2024-03-04',1,1),
(104,4,3,'2024-03-15','2024-03-20','2024-03-18',2,2);

INSERT INTO order_items VALUES
(101,1,1,2,15000.00,0.10),
(101,2,2,1,18000.00,0.05),
(102,1,3,1,45000.00,0.15),
(103,1,5,1,20000.00,0.10),
(104,1,4,2,8000.00,0.00);

INSERT INTO stocks VALUES
(1,1,50),
(1,2,40),
(1,3,20),
(2,4,60),
(2,5,30);

SELECT 
    c.first_name,
    c.last_name,
    o.order_id,
    o.order_date,
    o.order_status
FROM customers c
INNER JOIN orders o 
ON c.customer_id = o.customer_id
WHERE o.order_status = 1 
   OR o.order_status = 4
ORDER BY o.order_date DESC;

SELECT 
    p.product_name,
    b.brand_name,
    c.category_name,
    p.model_year,
    p.list_price
FROM products p
INNER JOIN brands b 
ON p.brand_id = b.brand_id
INNER JOIN categories c 
ON p.category_id = c.category_id
WHERE p.list_price > 500
ORDER BY p.list_price ASC;

SELECT 
    s.store_name,
    SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_sales
FROM stores s
INNER JOIN orders o 
ON s.store_id = o.store_id
INNER JOIN order_items oi 
ON o.order_id = oi.order_id
WHERE o.order_status = 4
GROUP BY s.store_name
ORDER BY total_sales DESC;

SELECT 
    p.product_name,
    s.store_name,
    st.quantity AS available_stock,
    SUM(oi.quantity) AS total_quantity_sold
FROM stocks st
INNER JOIN products p 
ON st.product_id = p.product_id
INNER JOIN stores s 
ON st.store_id = s.store_id
LEFT JOIN order_items oi 
ON st.product_id = oi.product_id
GROUP BY p.product_name, s.store_name, st.quantity
ORDER BY p.product_name;

