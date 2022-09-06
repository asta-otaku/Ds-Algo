function binarySearch(arr, t) {
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (t === arr[middle]) {
      return middle;
    }
    if (t < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1,3,5,6,8,10],8))

function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}
function search(arr, t, left, right) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (t === arr[middle]) {
    return middle;
  }
  if (t < arr[middle]) {
    search(arr, t, left, middle - 1);
  } else {
    search(arr, t, middle + 1, right);
  }
}

console.log(recursiveBinarySearch([1, 3, 5, 6, 8, 10], 8));
