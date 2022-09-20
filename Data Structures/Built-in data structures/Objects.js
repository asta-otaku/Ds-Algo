const obj = {
  name: "Heisenberg",
  age: 25,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "football"; //adds the new field
delete obj.hobby; //deletes the key-value pair

console.log(obj);
console.log(obj["age"]);

// Object.keys(), .values(), .entries() returns the keys, values and the key-value pair respectively

//Big-O time complexity
/*
Insert/Remove/Access -- O(1)
Search -- O(n)
.keys/.values/.entries -- O(n)
*/
