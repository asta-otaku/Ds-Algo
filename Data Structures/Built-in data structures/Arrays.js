const arr = [1, 2, 3, "Vishwas"];
arr.push(4);
arr.unshift(0); //adding element in the beginning of the array
arr.pop(); //removing element in the end of the array
arr.shift(); //removing element in the beginning of the array

for (const item of arr) {
  console.log(item);
}

//map, filter, reduce, concat, slice, and splice

//Big-O time complexity
/*
Insert or Remove from the end of an array -- Big-O = O(1) constant
Insert or Remove from the beginning of an array -- Big-O = O(n) linear
Access -- O(1)
Search -- O(n)
*/
