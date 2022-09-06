function bubbleSort(arr) {
  //ascending order
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [2, 1, -4, 6, 7];
bubbleSort(arr);
console.log(arr);

function bubbleSortDescending(arr) {
  //descending order
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const newArr = [2, 1, -4, 5, 7];
bubbleSortDescending(newArr);
console.log(newArr);

//Big=O = O(n^2) - Quadratic time complexity
