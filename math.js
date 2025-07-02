// Returns the square of a number
function square(n) 
{
  return n * n;
}

// Returns true if the number is even
function isEven(n) 
{
  return n % 2 === 0;
}

// Returns true if the number is odd
function isOdd(n) 
{
  return n % 2 !== 0;
}

// Multiplies two numbers
function multiply(left, right) 
{
  return left * right;
}

// Divides one value by another
function divide(left, right) 
{
  return left / right;
}

// Difference between two values
function substract(left, right) 
{
  return left - right;
}

// Combines two values
function add(left, right) 
{
  return left + right;
}

// Doubles the value
function double(n)
{
    return 2 * n;
}

// Increases the value by 1
function inc(n)
{
    return ++n;
}

// Decreases the value by 1
function dec(n)
{
    return --n;
}

// Test
const n = 5;
const left = 20;
const right = 10;

console.log(square(n));
console.log(isEven(n));
console.log(isOdd(n));
console.log(double(n));
console.log(inc(n));
console.log(dec(n));

console.log(multiply(left, right));
console.log(divide(left, right));
console.log(substract(left, right));
console.log(add(left, right));