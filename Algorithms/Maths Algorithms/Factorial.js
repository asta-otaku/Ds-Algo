function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))
//Big-O = O(n)

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(10))
console.log(recursiveFactorial(4));
//Big-O = O(n)
