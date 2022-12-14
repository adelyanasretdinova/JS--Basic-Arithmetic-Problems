// * Exercise 1
let OneTicketPrice = 15;
let TotalRevenue = 6450;
let currency = '$'

// Result: total amount of sold tickets:
console.log(TotalRevenue/OneTicketPrice, currency);


// * Exercise 2
let weeklyIncome = 500;
let weeks = 52;

// Result: Sylvia's yearly income:
console.log(weeklyIncome*weeks, currency);


// * Exercise 3
let number1 = 17;
let number2 = 30;
let result = (number1/number2)*100;
let percent = '%';

// Result: percent of 17 out of 30:
console.log("Q3:",result, percent);


// * Exercise 4
let sideSize = 4.75;
let cm = "cm";
const numberOfSquareSides = 4;

// Result: Perimeter of square:
console.log(`Perimeter of square ${(sideSize * numberOfSquareSides)} cm`);


// * Exercise 5
let side1 = 5;
let side2 = 6;
let side3 = 7;

// Result: Perimeter of a triangle:
console.log(`Perimeter of triangle: ${(side1 + side2 + side3)} cm`);


// * Exercise 6

// Result: The area of a square:
console.log(`Area of square: ${(side1 ** 2)} cm`);


// * Exercise 7
let sideA = 3;
let sideB = 4;
let sideC = 5;

// Result: The area of an right-angled triangle:
console.log(`Area of right-angled triangle: ${(sideA * sideB * 0.5)} cm`);


// * Exercise 8
let cubeSide = 9;

// Result: The area of an right-angled triangle:
console.log(`Volume of cube: ${(cubeSide ** 3)} cm`);

// * Exercise 9
let euro = '€';
let bill1 = 22.35;
let bill1Tip = 0.1;
let bill1Total = bill1 * (1 + bill1Tip) + euro;
let bill2 = 26.67;
let bill2Tip = 0.15;
let bill2Total = bill2 * (1 + bill2Tip) + euro;
let bill3 = 35.92;
let bill3Tip = 0.2;
let bill3Total = bill3 * (1 + bill3Tip) + euro;

// Result: Total value of each bill with Tips:
console.log(bill1Total, bill2Total, bill3Total);


// * Exercise 10
let workingHours = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
let hours = "hours";
let average = workingHours.reduce((accumulator, element) => accumulator + element, 0) / workingHours.length;
// Result: Average hours worked per day:
console.log(average, hours);

// * Exercise 11
let examResult = [75, 70, 85, 90, 100];
let averageResult = 85;
// let TotalResultSum=averageResult*(examResult.length+1);
let lastTestResult = averageResult * (examResult.length + 1)-examResult.reduce((accumulator, element) => accumulator + element, 0);
console.log("Score in the sixth test:", lastTestResult);


// * Exercise 12
 let avDegreeResult = 80;
 let newArrayLength = 9;
 let totalSum = avDegreeResult * newArrayLength;
 let currentAv = 78;
 let currentArrayLength = 8;
 let currentSum = currentAv * currentArrayLength;
 let minTestResult = totalSum - currentSum;
 console.log(`James needs a minimum of ${minTestResult}% to get an 80% average`);