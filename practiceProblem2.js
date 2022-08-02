// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Print the result in 2 decimal places.

// Math = 75.25,
// Biology = 65,
// Chemistry = 80,
// Physics = 35.45,
// Bangla = 99.5

// average = ?

var Math = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.5;

var average = parseFloat(
  ((Math + Biology + Chemistry + Physics + Bangla) / 5).toFixed(2)
);

console.log(Math);
console.log(Biology);
console.log(Chemistry);
console.log(Physics);
console.log(Bangla);
console.log(average);