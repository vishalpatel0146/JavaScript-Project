"use strict";
// Q-1 Create a program to calculate the sum of two numbers.
let add1 = 110;
let add2 = 60;
let add3 = add1 + add2;
document.getElementById('add1').innerText = String(add1);
document.getElementById('add2').innerText = String(add2);
document.getElementById('q1').innerText = String(add1);
document.getElementById('q11').innerText = String(add2);
document.getElementById('ans1').innerText = String(add3);
// Q-2 Create a program to calculate the difference between two numbers.
let dif1 = 100;
let dif2 = 10;
let dif3 = dif1 - dif2;
document.getElementById('dif1').innerText = String(dif1);
document.getElementById('dif2').innerText = String(dif2);
document.getElementById('q2').innerText = String(dif1);
document.getElementById('q22').innerText = String(dif2);
document.getElementById('ans2').innerText = String(dif3);
// Q-3 Create a program to calculate the product of two numbers.
let prod1 = 5;
let prod2 = 2;
let prod3 = prod1 * prod2;
document.getElementById('prod1').innerText = String(prod1);
document.getElementById('prod2').innerText = String(prod2);
document.getElementById('q3').innerText = String(prod1);
document.getElementById('q33').innerText = String(prod2);
document.getElementById('ans3').innerText = String(prod3);
// Q-4 Write a program to divide two numbers and handle division by zero using conditional statements.
let div1 = 25;
let div2 = 0;
let div3;
if (div2 > 0 || div2 < 0) {
    div3 = div1 / div2;
}
else {
    div3 = "Undefined";
}
document.getElementById('div1').innerText = String(div1);
document.getElementById('div2').innerText = String(div2);
document.getElementById('ans4').innerText = String(div3);
// Q-5 Create a program to calculate the square and cube of a number.
let sq1 = 5;
let sq = sq1 * sq1;
let cube = sq * sq1;
document.getElementById('sq1').innerText = String(sq1);
document.getElementById('q5').innerText = String(sq1);
document.getElementById('q55').innerText = String(sq1);
document.getElementById('q5').innerText = String(sq1);
document.getElementById('ans5').innerText = String(sq);
document.getElementById('ans55').innerText = String(cube);
// Q-6 Develop a program to calculate the area of a rectangle.
let length_6 = 6;
let width = 5;
let area_r = length_6 * width;
document.getElementById('length1').innerText = String(length_6);
document.getElementById('width1').innerText = String(width);
document.getElementById('ans6').innerText = String(area_r);
// Q-7 Create a program to calculate the area of a circle.
let radius = 3;
const pai = 3.14;
let area_c = pai * (radius * radius);
document.getElementById('r1').innerText = String(radius);
document.getElementById('pai').innerText = String(pai);
document.getElementById('ans7').innerText = String(area_c);
// Q-8 Write a program to convert Celsius to Fahrenheit.
let celsius = 3;
let fahrenheit = (celsius * 9 / 5) + 32;
document.getElementById('c1').innerText = String(celsius);
document.getElementById('ans9').innerText = String(fahrenheit);
// Q-9 Develop a program to calculate Simple Interest using the formula:
//  SI = (P × R × T) / 100
let p = 1000;
let r = 5;
let t = 3;
let si = (p * r * t) / 100;
document.getElementById('p').innerText = String(p);
document.getElementById('r').innerText = String(r);
document.getElementById('t').innerText = String(t);
document.getElementById('ans9').innerText = String(si);
// Q-10 Write a program to check whether a number is even or odd.
let even_odd = 10;
let value_1;
if (even_odd % 2 == 0) {
    value_1 = "even";
}
else {
    value_1 = "odd";
}
document.getElementById('num').innerText = String(even_odd);
document.getElementById('ans10').innerText = value_1;
// Q-11 Create a program to check whether a number is positive, negative, or zero.
let num1 = 10;
let value_2;
if (num1 == 0) {
    value_2 = "Zero";
}
else if (num1 > 0) {
    value_2 = "Positive";
}
else {
    value_2 = "Negative";
}
document.getElementById('num1').innerText = String(num1);
document.getElementById('ans11').innerText = value_2;
// Q-12 Develop a program to find the largest of two numbers using if-else.
let num_1 = -1;
let num_2 = -20;
let value_3;
if (num_1 > num_2) {
    value_3 = num_1;
}
else {
    value_3 = num_2;
}
document.getElementById('num12').innerText = String(num_1);
document.getElementById('num22').innerText = String(num_2);
document.getElementById('ans12').innerText = String(value_3);
// Q-13 Create a program to find the largest of three numbers using conditional statements.
let num__1 = 10;
let num__2 = 20;
let num__3 = -80;
let value_4;
if (num__1 > num__2) {
    if (num__1 > num__3) {
        value_4 = num__1;
    }
    else {
        value_4 = num__3;
    }
}
else if (num__2 > num__3) {
    value_4 = num__2;
}
else {
    value_4 = num__3;
}
document.getElementById('num13').innerText = String(num__1);
document.getElementById('num23').innerText = String(num__2);
document.getElementById('num33').innerText = String(num__3);
document.getElementById('ans13').innerText = String(value_4);
// Q-14 Write a program to check whether a person is eligible for voting (age ≥ 18).
let age = 17;
let eligible;
if (age >= 18) {
    eligible = "You are eligible for voting.";
}
else {
    eligible = "You are not eligible for voting.";
}
document.getElementById('age14').innerText = String(age);
document.getElementById('ans14').innerText = eligible;
// Q-15 Develop a program to calculate grade based on marks:
// 90+ → A
// 75–89 → B
// 50–74 → C
// Below 50 → Fail
let marks = 60;
let grade;
if (marks >= 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 75 && marks <= 89) {
    grade = "B";
}
else if (marks >= 50 && marks <= 74) {
    grade = "C";
}
else {
    grade = "Fail";
}
if (marks > 100) {
    grade = "invalid marks";
}
document.getElementById('mark').innerText = String(marks);
document.getElementById('ans15').innerText = grade;
// Q-16 Write a program to check whether a given year is a leap year.
let year = 1905;
let leap;
if (year % 4 == 0) {
    leap = "is a leap year.";
}
else {
    leap = "is not a leap year.";
}
document.getElementById('year').innerText = String(year);
document.getElementById('year1').innerText = String(year);
document.getElementById('ans16').innerText = leap;
// Q-17 Create a program to check whether a number is divisible by both 5 and 11.
let num_17 = 100;
let value_17;
if (num_17 % 5 == 0 && num_17 % 11 == 0) {
    value_17 = "is divided by 5 ans 11.";
}
else {
    value_17 = "is not divided by 5 ans 11.";
}
document.getElementById('num17').innerText = String(num_17);
document.getElementById('ans27').innerText = String(num_17);
document.getElementById('ans17').innerText = value_17;
// Q-18 Develop a simple calculator using swit++ch statement to perform addition, subtraction, multiplication, and division.
let num_first = 6;
let num_second = 2;
let result;
let word;
let and = "and";
let is = "is";
let choice = 3;
switch (choice) {
    case 1:
        word = "Addition of";
        result = Number(num_first) + Number(num_second);
        break;
    case 2:
        word = "Subtraction of";
        result = Number(num_first) - Number(num_second);
        break;
    case 3:
        word = "Multiplication of";
        result = Number(num_first) * Number(num_second);
        break;
    case 4:
        word = "Division of";
        result = Number(num_first) / Number(num_second);
        break;
    default:
        word = "Invalid Choice.";
        result = "Enter between 1 to 4";
        and = "";
        is = "";
        num_first = " ";
        num_second = " ";
        break;
}
document.getElementById('num18').innerText = String(num_first);
document.getElementById('num28').innerText = String(num_second);
document.getElementById('word').innerText = word;
document.getElementById('num_first').innerText = String(num_first);
document.getElementById('and').innerText = and;
document.getElementById('num_second').innerText = String(num_second);
document.getElementById('is').innerText = is;
document.getElementById('ans18').innerText = String(result);
// Q-19 Write a program to calculate BMI and display the health category (Underweight, Normal, Overweight, Obese).
let weight = 130;
let height = 1.79;
let bmi;
let catagory;
if (weight > 0 && height > 0) {
    bmi = weight / (height * height);
    if (bmi < 18.5) {
        catagory = "Category: Underweight";
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        catagory = "Category: Normal";
    }
    else if (bmi > 25 && bmi < 29.9) {
        catagory = "Category: Overweight";
    }
    else {
        catagory = "Category: Obese";
    }
}
else {
    bmi = "Invalid Information.";
    catagory = "";
}
document.getElementById('weight_19').innerText = String(weight);
document.getElementById('height_19').innerText = String(height);
document.getElementById('bmi').innerText = String(bmi);
document.getElementById('catagory').innerText = catagory;
// Q-20 Create a program to calculate electricity bill based on units consumed:
// First 100 units → ₹5 per unit
// Next 100 units → ₹7 per unit
// Above 200 units → ₹10 per unit
let unit = 650;
let bill;
if (unit <= 100) {
    bill = unit * 5;
}
else if (unit > 100 && unit <= 200) {
    bill = (100 * 5) + ((unit - 100) * 7);
}
else {
    bill = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
}
document.getElementById('unit').innerText = String(unit);
document.getElementById('bill').innerText = String(bill);
