console.log("Hello world from HTML");

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// Sắp xếp theo giá trị
items.sort(function (a, b) {
  return a.value - b.value;
});

// In ra mảng đã được sắp xếp
console.log(items);
