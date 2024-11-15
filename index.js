// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

// After adhering to Single Responsibility Principle (S)
function calculateSalary(employee) {
  return employee.hoursWorked * employee.hourlyRate;
}

function displayEmployeeInfo(employee) {
  const salary = calculateSalary(employee);
  return `Employee Name: ${employee.name}, Salary: $${salary}, Email: ${employee.email}`;
}

// Call the function with sample employee data
const employee = {
  name: 'John Doe',
  hoursWorked: 40,
  hourlyRate: 20,
  email: 'john@example.com',
};

console.log(displayEmployeeInfo(employee));






// Good Example: Following Single Responsibility Principle
function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function formatTotal(total) {
  return `Total: $${total.toFixed(2)}`;
}

// Usage
const items = [
  { name: 'Apple', price: 0.5, quantity: 4 },
  { name: 'Banana', price: 0.2, quantity: 10 },
];

const total = calculateTotal(items);
const formattedTotal = formatTotal(total);
console.log(formattedTotal);