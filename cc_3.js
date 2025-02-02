//Task 1 - Product Price Management
let prices = [3.99, 8.00, 6.75, 11.99, 10.00];
prices.push(5.50); //Adding a new price to the array
prices.shift(); //Removing the first price from the array
console.log("Updated prices:", prices); //Logging the updated array to the console

//Task 2 - Modifying Customer Orders
let orders = [4, 7, 6, 3, 9];
//Increasing the third order quantity in the array by 5
orders[2] += 5;
//Adding all the orders in the array and getting the total orders
let totalOrders = orders.reduce((total, quantity) => total + quantity, 0);
//Logging the updated array to the console
console.log("Updated orders:", orders);
//Logging the total amount of orders to the console
console.log("Total orders:", totalOrders);

//Task 3: Employee Performance Tracking
//Declaring an object called employee with properties
let employee = {
    name: "Kevin Ferguson", //Name
    role: "Data Analyst", //Role
    performanceScore: 85, //Performance score
    isActive: true //Active or not active
};
employee.performanceScore = 95; //Updating the performance score
employee.promotionEligible = employee.performanceScore >= 90; //Adding a new property called promotionEligible to the object employee

//Logging the updated employee object to the console
console.log("Updated employee:", employee); 