

//                                             Task - 1


// Task - 1 Finding the highest salary


let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

function highestSalary() {

    let highest = employees[0];

    for (let i = 1; i < employees.length; i++) {

        if (employees[i].salary > highest.salary) {
            highest = employees[i];
        }

    }

    console.log("Highest Salary: " + highest.salary);
    console.log("Employee Name: " + highest.name);
}

highestSalary();

//  Task 2 - Find Employee by ID

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let searchId = 103;

function searchEmployee() {

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].id === searchId) {
            console.log("Employee Found");
            console.log("Name: " + employees[i].name);
            console.log("ID: " + employees[i].id);
            console.log("Salary: " + employees[i].salary);
        }

    }

}

searchEmployee();


// Task - 3 Calculate Salary with Bonus

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let bonus = 5000;

function calculateBonus() {

    for (let i = 0; i < employees.length; i++) {

        let totalSalary = employees[i].salary + bonus;

        console.log(employees[i].name + " : " + totalSalary);
    }

}

calculateBonus();


//  Task 4 - Experience Check

let employees = [
{
    name: "Naveen",
    experience: 2
},
{
    name: "John",
    experience: 7
},
{
    name: "Arun",
    experience: 5
}
];

function checkExperience() {

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].experience >= 5) {
            console.log(employees[i].name + " - Senior Employee");
        }
        else {
            console.log(employees[i].name + " - Junior Employee");
        }

    }

}

checkExperience();

// Task 5 - Display Only Employee Names

let employees = [
{
    name: "Naveen",
    experience: 2
},
{
    name: "John",
    experience: 7
},
{
    name: "Arun",
    experience: 5
}
];

function printNames() {
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i].name);
    }
}

printNames();

// Task 6 - Display Employee IDs

let employees = [
{
    name: "Naveen",
    id: 101,
    experience: 2
},
{
    name: "John",
    id: 102,
    experience: 7
},
{
    name: "Arun",
    id: 103,
    experience: 5
}
];

function printEmployeeIds() {

    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i].id);
    }

}

printEmployeeIds();

// Task 7 - Find Total Salary

let employees = [
{
    name: "Naveen",
    salary: 30000
},
{
    name: "John",
    salary: 60000
},
{
    name: "Arun",
    salary: 45000
}
];

function totalSalary() {

    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total = total + employees[i].salary;
    }

    console.log("Total Salary: " + total);
}

totalSalary();


// Task 8 - Employees Earning More Than ₹40,000

let employees = [
{
    name: "Naveen",
    salary: 30000
},
{
    name: "John",
    salary: 60000
},
{
    name: "Arun",
    salary: 45000
}
];

function printEmployees() {

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].salary >= 45000) {
            console.log(employees[i].name);
        }

    }

}

printEmployees();


// Task 9 - Increase Salary

let employees = [
{
    name: "Naveen",
    salary: 30000
},
{
    name: "John",
    salary: 60000
},
{
    name: "Arun",
    salary: 45000
}
];

function increaseSalary() {

    for (let i = 0; i < employees.length; i++) {

        employees[i].salary = employees[i].salary + 5000;

        console.log(employees[i].name + " : " + employees[i].salary);
    }

}

increaseSalary();


// Task 10 - Employee Report

let employees = [
{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];

function printEmployees() {

    for (let i = 0; i < employees.length; i++) {

        console.log(`Employee Name : ${employees[i].name}`);
        console.log(`Employee ID : ${employees[i].id}`);
        console.log(`Salary : ${employees[i].salary}`);

    }

}

printEmployees();

//  Challenge Task

let employees = [
{
    name: "Naveen",
    id: 101,
    salary: 30000
},
{
    name: "John",
    id: 102,
    salary: 60000
},
{
    name: "Arun",
    id: 103,
    salary: 45000
}
];

// 1. Total Employees
function totalEmployees() {
    console.log("Total Employees: " + employees.length);
}

// 2. Highest Salary
function highestSalary() {

    let highest = employees[0];

    for (let i = 1; i < employees.length; i++) {

        if (employees[i].salary > highest.salary) {
            highest = employees[i];
        }

    }

    console.log("Highest Salary: " + highest.salary);
}

// 3. Lowest Salary
function lowestSalary() {

    let lowest = employees[0];

    for (let i = 1; i < employees.length; i++) {

        if (employees[i].salary < lowest.salary) {
            lowest = employees[i];
        }

    }

    console.log("Lowest Salary: " + lowest.salary);
}

// 4. Total Salary
function totalSalary() {

    let total = 0;

    for (let i = 0; i < employees.length; i++) {
        total = total + employees[i].salary;
    }

    console.log("Total Salary: " + total);
}

// 5. Employee with Highest Salary
function highestEmployee() {

    let highest = employees[0];

    for (let i = 1; i < employees.length; i++) {

        if (employees[i].salary > highest.salary) {
            highest = employees[i];
        }

    }

    console.log("Employee with Highest Salary: " + highest.name);
}

// 6. Employee with Lowest Salary
function lowestEmployee() {

    let lowest = employees[0];

    for (let i = 1; i < employees.length; i++) {

        if (employees[i].salary < lowest.salary) {
            lowest = employees[i];
        }

    }

    console.log("Employee with Lowest Salary: " + lowest.name);
}

// 7. Salary Greater Than 40000
function salaryGreaterThan40000() {

    console.log("Employees earning more than 40000:");

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].salary > 40000) {
            console.log(employees[i].name);
        }

    }

}

// 8. Search Employee by ID
function searchEmployee(searchId) {

    let found = false;

    for (let i = 0; i < employees.length; i++) {

        if (employees[i].id == searchId) {

            console.log("Employee Found");
            console.log("Name: " + employees[i].name);
            console.log("Salary: " + employees[i].salary);

            found = true;
            break;
        }

    }

    if (!found) {
        console.log("Employee Not Found");
    }

}

// 9. Add Bonus
function addBonus() {

    console.log("Salary After Bonus:");

    for (let i = 0; i < employees.length; i++) {

        let newSalary = employees[i].salary + 5000;

        console.log(employees[i].name + " : " + newSalary);

    }

}

// 10. Employee Report
function employeeReport() {

    console.log("Employee Report");

    for (let i = 0; i < employees.length; i++) {

        console.log(`Employee Name : ${employees[i].name}`);
        console.log(`Employee ID   : ${employees[i].id}`);
        console.log(`Salary        : ${employees[i].salary}`);
        console.log("--------------------------");

    }

}

// Function Calls
totalEmployees();
highestSalary();
lowestSalary();
totalSalary();
highestEmployee();
lowestEmployee();
salaryGreaterThan40000();
searchEmployee(102);
addBonus();
employeeReport();

// ---------------------------------------------------------------------------------------------
//                                                     Task - 2

//  Task 1 - Company Welcome Function

function welcome() {
    console.log("Welcome to Stackly IT");
}

welcome();

// Task 2 - Employee Details

function employeeDetails(name, department, salary) {

    console.log("Employee Name : " + name);
    console.log("Department : " + department);
    console.log("Salary : " + salary);

}

employeeDetails("Naveen", "Developer", 30000);


// Task 3 - Calculate Bonus

function calculateSalary(salary, bonus) {

    let totalSalary = salary + bonus;

    console.log(`Total Salary : ${totalSalary}`);

}

calculateSalary(40000, 5000);

// Task 4 - Student Result

function checkResult(marks) {

    if (marks >= 35) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }

}

checkResult(45);


// Task 5 - Return Employee Name

function getName() {
    return "Naveen";
}

let employeeName = getName();

console.log(employeeName);

//  Task 6 - Product Price

function getPrice() {
    return 25000;
}

let price = getPrice();

let gst = price * 18 / 100;
let totalPrice = price + gst;

console.log("Price : " + price);
console.log("GST : " + gst);
console.log("Total Price : " + totalPrice);


// Task 7 - Scope

function demo() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);
}

demo();

// output :

// 10

// if we add these two lines
//   console.log(b);   -  ReferenceError: b is not defined
//   console.log(c);   -  ReferenceError: b is not defined

// var is a global scope 
// let & const are block scope



// Task 8 - Hoisting

console.log(a);

var a = 100;

// output  -  undefined 

console.log(b);

let b = 200;

// output - ReferenceError: Cannot access 'b' before initialization


//  Task 9 - Named Function

function greet() {
    console.log("Good Morning");
}

greet();

// Task 10 - Anonymous Function

let welcome = function() {
    console.log("Welcome Employee");
};

welcome();


// Task 11 - Arrow Function

let training = () => {
    console.log("JavaScript Training");
};

training();

//  Task 12 - Return Function

    function getCompany() {
    return "Stackly";
}

let company = getCompany();

console.log(`Welcome ${company}`);


// Task 13 - Higher Order Function


function dashboard() {
    console.log("Dashboard Loaded");
}

function login() {
    console.log("Login Successful");
    dashboard();
}

login();

// Task 14 - Callback Function

 function delivered() {
    console.log("Delivered");
}

function preparingFood(callback) {
    console.log("Preparing Food");
    callback();
}

function orderReceived(callback) {
    console.log("Order Received");
    callback(delivered);
}

orderReceived(preparingFood);

//  Task 15 - Generator Function

function* coupons() {
    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";
}

let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// Task 16 - Return + Generator

function* fruits() {
    yield "Apple";
    yield "Orange";
    yield "Banana";
}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);

// Task 17 - Currying

function discount(price) {

    return function(discountPercent) {

        let finalPrice = price - (price * discountPercent / 100);

        console.log("Final Price : " + finalPrice);

    };

}

discount(1000)(10);
//  Task 18 - Company Salary

function salary(salaryAmount) {

    return function(bonus) {

        return function(allowance) {

            let totalSalary = salaryAmount + bonus + allowance;

            console.log("Total Salary : " + totalSalary);

        };

    };

}

salary(30000)(5000)(2000);


// Task 19 - Real-Time Login System

function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccessful() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    console.log("Verify Password");
    loginSuccessful();
}

function enterUsername() {
    console.log("Enter Username");
    verifyPassword();
}

enterUsername();


//  Mini Project (Employee Salary Management System)

// Employee Object
let employee = {
    name: "Naveen",
    id: 101,
    department: "Developer",
    salary: 30000
};

// Arrow Function
const welcome = () => {
    console.log("Welcome Employee");
};
welcome();

// Anonymous Function
let showDepartment = function () {
    console.log("Department : " + employee.department);
};
showDepartment();

// Function - Calculate Salary + Bonus
function calculateSalary(salary, bonus) {
    return salary + bonus;
}

let finalSalary = calculateSalary(employee.salary, 5000);

// Callback Function
function loadDashboard() {
    console.log("Employee Dashboard Loaded");
}

// Higher-Order Function
function login(callback) {
    console.log("Login Successful");
    callback();
}

login(loadDashboard);

// Generator Function
function* bonusCoupon() {
    yield "10% Bonus Coupon";
    yield "20% Bonus Coupon";
    yield "30% Bonus Coupon";
}

let coupon = bonusCoupon();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// Currying - Tax Calculation
function tax(salary) {
    return function (taxPercent) {

        let taxAmount = salary * taxPercent / 100;
        let salaryAfterTax = salary - taxAmount;

        return salaryAfterTax;
    };
}

let salaryAfterTax = tax(finalSalary)(10);

// Employee Report

console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID : ${employee.id}`);
console.log(`Department : ${employee.department}`);
console.log(`Basic Salary : ${employee.salary}`);
console.log(`Salary + Bonus : ${finalSalary}`);
console.log(`Salary After Tax : ${salaryAfterTax}`);

