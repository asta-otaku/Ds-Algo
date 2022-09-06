function linearSearchf(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearchf([-5,2,10,4,6,10],10))
