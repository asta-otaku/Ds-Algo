const set = new Set([1, 2, 3]);
set.add(4);
set.has(2); //should return a boolean
set.delete(3);
set.clear();

for (const item of set) {
  console.log(item);
}
