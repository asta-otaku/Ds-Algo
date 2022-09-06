function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7));
//Big-O = O(n)

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(7))
// console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(8))
// console.log(recursiveFibonacci(9))
//Big-O = O(2^n) which makes it a bad solution for the sequence
