console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  const add = operand1 + operand2;
  console.log(add);
});

subtractButton.addEventListener("click", () => {
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
  const subtraction = operand1 - operand2;
  console.log(subtraction);
});

multiplyButton.addEventListener("click", () => {
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
  const multiply = operand1 * operand2;
  console.log(multiply);
});

divideButton.addEventListener("click", () => {
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
  const division = operand1 / operand2;
  console.log(division);
});

exponentButton.addEventListener("click", () => {
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
  const power = Math.pow(operand1, operand2);
  console.log(power);
});

moduloButton.addEventListener("click", () => {
  const divideAgain = operand1 % operand2;
  console.log(divideAgain);
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1 = operand1 + 1;
  console.log(operand1);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(operand1);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  operand1 = operand1 - 1;
  console.log(operand1);
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log(operand1);
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(operand1);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  operand1 = operand1 / 2;
  console.log(operand1);
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
