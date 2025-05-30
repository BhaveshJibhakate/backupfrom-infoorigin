// Simple Debugger Example

function addNumbers(a, b) {
    let sum = a + b;  // Line 3
    console.log('Sum:', sum);  // Line 4
    return sum;  // Line 5
  }
  
  function multiplyNumbers(a, b) {
    let product = a * b;  // Line 8
    console.log('Product:', product);  // Line 9
    return product;  // Line 10
  }
  
  function calculate() {
    let x = 5;  // Line 13
    let y = 10;  // Line 14
  
    // Step Over/Step Into examples here
    let resultAdd = addNumbers(x, y);  // Line 17
    let resultMul = multiplyNumbers(x, y);  // Line 18
    
    // Step Over/Step Into examples here
    console.log('Addition Result:', resultAdd);  // Line 20
    console.log('Multiplication Result:', resultMul);  // Line 21
  }
  
  calculate();  // Line 24
  