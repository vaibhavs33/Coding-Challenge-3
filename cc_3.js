//Task 1 - Product Price Management
let prices = [3.99, 8.00, 6.75, 11.99, 10.00]; //Declaring an array called prices with 5 numerical values that represent the price of the products
prices.push(5.50); //Adding a new price to the array
prices.shift(); //Removing the first price from the array
console.log("Updated prices:", prices); //Logging the updated array to the console

//Task 2 - Modifying Customer Orders
let orders = [4, 7, 6, 3, 9]; //Declaring an array called orders that contain numerical values which represent the customer order quantities
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
//Adding a boolean property called promotionEligible based on the performance score
//If the score is 90 or higher, true. Otherwise, it would be false.
employee.promotionEligible = employee.performanceScore >= 90; 

//Logging the updated employee object to the console
console.log("Updated employee:", employee); 

//Task 4: Customer Feedback Records
//Declaring an array called feedback that contain objects which represent customer feedback
let feedback = [
    {customerName: "Alex", feedbackText: "Great quality", rating: 5}, //Feedback from Alex on a 5 point scale
    {customerName: "Jeff", feedbackText: "Decent service", rating: 3}, //Feedback from Jeff on a 5 point scale
    {customerName: "Peter", feedbackText: "Good experience", rating: 4} //Feedback from Peter on a 5 point scale

];

//Adding a new customer feedback entry to the array
feedback.push({customerName: "David", feedbackText: "Excellent product", rating: 5});

//Logging the updated list of customer feedback to the console
console.log("Customer feedback:", feedback);

//Task 5: Inventory Management System
//Declaring an object called inventory to store the stock details
let inventory = {
    itemName: "Smartphone", //Name of the item in the inventory
    stockCount: 75, //Number in stock
    price: 499.99, //Price

    //Method to calculate the total inventory value (stockCount * price)
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

//Logging the details of the inventory to the console
console.log("Inventory details:", inventory);

//Logging the total value of all the inventory stock
console.log("Total inventory value:", inventory.calculateTotalValue());
