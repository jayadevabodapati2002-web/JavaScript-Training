
// // Task - 1 Employee Login Eligibility


// let age = Number(prompt("Enter your Age ?"));

// let Idcard = confirm("Is Employee ID Available ?");

// let attendance = Number(prompt("Please enter your attendance percentage :"));

// if (age >= 18 && Idcard && attendance >= 75){
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }


// //Task - 2 Student Grade System

// let grade = Number(prompt("Enter your Grade :"));

// if (grade >= 90 && grade <= 100){
//     console.log("Grade A+")
// } else if (grade >= 80 && grade <= 89) {
//     console.log("Grade A");
// } else if (grade >= 70 && grade <= 79) {
//     console.log("Grade B");
// } else if (grade >= 60 && grade <= 69) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }



// //Task - 3 ATM Withdrawl

// let Balance = 5000;

// let Withdraw = 3000;

// if (Balance > Withdraw && Withdraw % 100 === 0){
//     console.log("Transaction Successful");
//     Balance = Balance - Withdraw
//     console.log("Remaining Balance : " + Balance);
// } else {
//     console.log("Transaction Failed");
    
// }


// // Task - 4 Food Ordering App

// let choice = Number(prompt("Enter your choice (1-5) :"));

// switch (choice) {
//     case 1 :
//         console.log("You ordered Pizza");
//         break;
//     case 2 :
//         console.log("You ordered Burger");
//         break;
//     case 3 :
//         console.log("You ordered Shawarma");
//         break;
//     case 4 :
//         console.log("You ordered Biryani");
//         break;
//     case 5 :
//         console.log("You ordered Juice");
//         break;
//     default:
//         console.log("Invalid Choice");
        
// }


// // Task - 5 E-commerce Discount

// let purchase = Number(prompt("Enter your purchase amount :"));
// let premiumUser = confirm("Are you a Premium User");

// let discount = 0;
// let finalPrice = 0;

// if (purchase >= 5000 && premiumUser){
//     discount = purchase * 20 / 100
// } else {
//     discount = purchase * 10 / 100
// }

// finalPrice = purchase - discount

// console.log(purchase);
// console.log(discount);
// console.log(finalPrice);


// // Task - 6 Attendence Report 

// for (a=1; a<=30; a++){
//     console.log("Day " + a + " Present");
    
// }


// // Task - 7 Even Number Generator

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // Task - 8 Mobile number Validation

// let mobile = prompt("Enter your number :");
// let firstnum = mobile[0];

// if (mobile.length === 10 && ((firstnum === "6") || (firstnum === "7") || (firstnum === "8") || (firstnum === "9"))) {
//     console.log("Valid Mobile Number");
// } else {
//     console.log("Invalid Mobile Number");
    
// }


// // Task - 9 

// let cart = [
// "Milk",
// "Bread",
// "Egg",
// "Rice",
// "Oil"
// ]

// len = cart.length

// console.log(cart[0]);
// console.log(cart[len - 1]);
// console.log(len);

// // Task - 10 Employee Database

// let employee = {

// name : "Jayadeva",

// salary : 40000,

// department : "Frontend Developer",

// experience : "2"

// }

// console.log("Employee Name : " + employee.name);
// console.log("Department : " + employee.department);
// console.log("Experience : " + employee.experience + " Years");


// // Task - 11 Company ID Generator

// let name = "Naveen";
// let Id = 1045 ;
// let department = "Development";

// console.log(`Welcome ${name}`);
// console.log(`Your employee ID is EMP${Id}`);
// console.log(`Department : ${department}`);


// // Task - 12 User Registration

// let name = prompt("Enter your name :")

// let age = Number(prompt("Enetr your Age :"))

// let accept = confirm("Do you accept terms?")

// alert("Registration Successful")

// // Task - 13 Salary Increment Calculator 

// let salary = Number(prompt("Enter Your Salary :"))

// let increment = 15

// let increasedSalary = salary * increment / 100

// newSalary = salary + increasedSalary

// console.log("Old Salary : " + salary);
// console.log("Increment Amount : " + increasedSalary);
// console.log("New Salary :" + newSalary);

// // Task - 14 Restaurant Bill Generator

// let Burger = 150
// let Pizza = 300
// let Juice = 80 

// let subTotal = Burger + Pizza + Juice

// let GST = subTotal * 18 / 100

// let GrandTotal = subTotal + GST

// console.log("Subtotal : " + subTotal);
// console.log("GST : " + GST);
// console.log("Grand Total : " + GrandTotal);

// // Task - 15 Company Attendance Dashboard

// let employees = {Rahul : "Present",

// Arun : "Absent",

// Kamal : "Present",

// Priya : "Present",

// Divya : "Absent",};

// let p = 0;
// let a = 0;

// for ( let i in employees ){
//     if (employees[i] == "Present" ){
//         console.log(i + " - Present");
//         p++;
//     }else{
//         console.log(i + " - Absent");
//         a++
        
//     }
// }

// console.log("Total Present : " + p);
// console.log("Total Absent : " + a);


// 




















