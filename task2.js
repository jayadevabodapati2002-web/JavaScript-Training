

// Task 1 User Introduction

let name = prompt("Enter your name:");

let age = prompt("Enter your age:");

console.log(" My name is " + name);

console.log("I am " + age + " years old");



// Task 2 Degree Confirmation

let degree = confirm("Did you complete Degree?");

degree &&
console.log("Degree Completed");

!degree &&
console.log("Degree Not Completed");

// Task 3 Mobile Price

let mobile = 15000;

let discount = 2000;

let finaldiscount = mobile - discount;
 
console.log("Final Price : " + finaldiscount);


// Task 4 Age Eligibility

let age = Number(prompt("Enter your age:"));

age >= 18 &&
console.log("Eligible for Vote");

age < 18 &&
console.log("Not Eligible");

// Task 5 Shopping Cart

let cart = ["Rice","Milk","Sugar","Tea Powder"];

console.log("First Product : " + cart[0]);
console.log("Last Product : " + cart[cart.length - 1]);
console.log("Total Products : " + cart.length);

// Task 6 Student Details

let student = {
    name: "Naveen",
    age: 18,
    course: "Mern"
};
console.log("Student Name : " + student.name);
console.log("Student Course : "+ student.course);

// Task 7 Employee Salary Calculater

let salary = 25000;
let bonus = 5000;

let totalSalary = salary + bonus;

console.log("Total Salary : " + totalSalary);

// Task 8 Website Login check

let username = "admin";
let password = "1234";

let user = prompt("Enter Username:");
let pass = prompt("Enter Password:");

(user === username && pass === password) &&
console.log("Login Successful");

(user !== username || pass !== password) &&
console.log("Invalid Credentials");


// Task 9 Food Delivery App

let foodprice = 350;
let deliveryCharge = 50;

let totalBill = foodprice + deliveryCharge;
let gst = totalBill * 0.05;
let grandTotal = totalBill + gst;
console.log("Total Bill : " + totalBill);
console.log("GST (5%) : " + gst);
console.log("Grand Total : " + grandTotal);

// Task 10 E-commers Product Details

let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
};

console.log("Product Name : " + product.name);
console.log("Brand : " + product.brand);
console.log("Price : " + product.price);
console.log("Stock Available : " + product.stock);

// Task 11  Attendance System

let present = confirm("Are you Present?");

present &&
console.log("Attendance Marked");

!present &&
console.log("Absent");

// Task 12 Banking Application

let balance = Number(prompt("Enter Current Balance:"));
let withdraw = Number(prompt("Enter Withdraw Amount:"));

withdraw <= balance &&
console.log("Transaction Successful");

withdraw <= balance &&
console.log("Remaining Balance : " + (balance - withdraw));

withdraw > balance &&
console.log("Insufficient Balance");

// challange Task 
// Build a Mini Employee Management System

let employee = {
    name: prompt("Enter Employee Name:"),
    age: Number(prompt("Enter Employee Age:")),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Monthly Salary:"))
};

console.log("Employee Name : " + employee.name);
console.log("Employee Age : " + employee.age);
console.log("Department : " + employee.department);

let annualSalary = employee.salary * 12;
console.log("Annual Salary : " + annualSalary);

employee.salary > 30000 &&
console.log("Senior Employee");

employee.salary <= 30000 &&
console.log("Junior Employee");












