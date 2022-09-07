function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
quickSort(arr);
console.log(arr);

//Worst case = O(n^2) happens when the array is already sorted
//Avg case = O(nlogn)
