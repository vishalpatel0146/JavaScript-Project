// Question-1 Write a simple JavaScript program to print expected Output using following array.

let myColor1: string[] = ["Red", "Green", "White", "Black"];

document.getElementById("ans1")!.innerText = String(myColor1);
document.getElementById("ans12")!.innerText = myColor1.join("+");
document.getElementById("ans13")!.innerText = String(myColor1.slice(0, 3));
document.getElementById("ans14")!.innerText = myColor1[0];
document.getElementById("ans15")!.innerText = String(myColor1.slice(1, 3));
myColor1.push("Orange");
document.getElementById("ans16")!.innerText = String(myColor1);


// Question-2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.

let num2: number[] = [2, 3, 4, 5, -6, -7];
let sum2: number = 0;
let sum21: number = 0;

document.getElementById("ans2")!.innerText = String(num2);

// Using For Loop
for(let i = 0; i < num2.length; i++) {

    sum2 += num2[i];

}

document.getElementById("ans21")!.innerText = String(sum2);

// ForEach Loop 
num2.forEach((value: number) => {
    sum21 += value;
});

document.getElementById("ans22")!.innerText = String(sum21);


// Question-3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let num3: number[] = [1, 5, 6, 4, 58, -5]

document.getElementById("ans3")!.innerText = String(num3);

// For Maximum
function maximum(value: number[]) {
    
    let tempMax3: number = value[0];
    
    for(let i = 0; i < value.length; i++) {
        
        if(tempMax3 < value[i]) {
            tempMax3 = value[i];
        }
        
    }
    
    return tempMax3;
    
}

// For Minimum
function minimum(value: number[]) {
    
    let tempMin3: number = value[0];

    for(let i = 0; i < value.length; i++) {

        if(tempMin3 > value[i]) {
            tempMin3 = value[i];
        }

    }

    return tempMin3;

}

let max3: number = maximum(num3);
let min3: number = minimum(num3);

document.getElementById("ans31")!.innerText = String(max3);
document.getElementById("ans32")!.innerText = String(min3);


// Question-4 Write a JavaScript program for convert all array element in ASCII value.

let arr4: string[] = ["A", "1", "C"];
let cov4: string = "";

for(let i = 0; i < arr4.length; i++) {

    cov4 += arr4[i].charCodeAt(0) + " ";

}

document.getElementById("ans4")!.innerText = String(arr4);
document.getElementById("ans41")!.innerText = String(cov4);


// Question-5 Write a JavaScript program for remove negative values using the filter array function. 
// numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let arr5: number[] = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

document.getElementById("ans5")!.innerText = String(arr5);

let rvn5 = arr5.filter((value : number) => {
    return value >= 0; 
});

document.getElementById("ans51")!.innerText = String(rvn5);


// Question-6 Write a JavaScript program using array map() method and return the square of array element.
// arr = [2, 5, 6, 3, 8, 9];

let arr6: number[] = [2, 5, 6, 3, 8, 9];

let sq6 = arr6.map((value) => {
    return value * value;
});

document.getElementById("ans6")!.innerText = String(arr6);
document.getElementById("ans61")!.innerText = String(sq6);


// Question-7 Write a JavaScript program for sort array in ascending descending. 
// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

let arr7: number[] = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let asc7: number[] = [...arr7].sort((a, b) => a - b);

let dsc7: number[] = [...arr7].sort((a, b) => b - a);

document.getElementById("ans7")!.innerText = String(arr7);
document.getElementById("ans71")!.innerText = String(asc7);
document.getElementById("ans72")!.innerText = String(dsc7);


// Question-8 Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let string8: string[] = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let result8 = string8.filter(function(words){
    return words.length >= 8;
});

document.getElementById('ans8')!.innerText = String(string8);
document.getElementById('ans81')!.innerText = String(result8);


// Question-9  write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
// output:-  "a new java book" , "A NEW JAVA BOOK"

// 1-Problem
let str9: string = "airplane";
let output9: string = str9.charAt(2);

document.getElementById("ans9")!.innerText = String(str9);
document.getElementById("ans91")!.innerText = String(output9);

// 2-Problem
let str91: string = "oxoxoxox";
let output92: string = str91.toUpperCase().replaceAll("O", "o");

document.getElementById("ans92")!.innerText = String(str91);
document.getElementById("ans93")!.innerText = String(output92);

// 3-Problem
let str94: string = "A New Java Book";
let sm9: string = str94.toLowerCase();
let lg9: string = str94.toUpperCase();

document.getElementById("ans94")!.innerText = String(str94);
document.getElementById("ans95")!.innerText = String(sm9);
document.getElementById("ans96")!.innerText = String(lg9);


// Question-10 write a JavaScript program for array reverse.

let arr10 : number[]= [1, 2, 3];
let rev10: number[] = [...arr10].reverse();

document.getElementById("ans10")!.innerText = String(arr10);
document.getElementById("ans101")!.innerText = String(rev10);


// Question-11 write a JavaScript program for check value is found or not?

let arr11:  number[] = [1, 2, 3, 5, 10, 50];
let value11: number = 6;
let find11: boolean = arr11.includes(value11);

document.getElementById("ans11")!.innerText = String(arr11);
document.getElementById("ans111")!.innerText = String(value11);
document.getElementById("ans112")!.innerText = String(find11);


//  Question-12 write a JavaScript program for print your name and write the no of total character.

let str12: string = "Ramesh";
let lh12: number = str12.length;

document.getElementById("ans-12")!.innerText = String(str12);
document.getElementById("ans121")!.innerText = String(lh12);


// Question-13 write a JavaScript program given this output using replace concept.

let name13: string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning.";
let value13: string = "cat";

let replace13: string = name13.replaceAll("dog", value13);

document.getElementById("ans-13")!.innerText = String(name13);
document.getElementById("ans131")!.innerText = String(replace13);


// Question-14 write a JavaScript program convert string to array.

let str14: string = "Hire the top 1% freelance developers";
let arr14: string[] = str14.split(" ").slice(0, 4);

document.getElementById("ans-14")!.innerText = String(str14);
document.getElementById("ans141")!.innerText = String(arr14);

// Question-15 write a JavaScript program convert for array to string.

let arr15: (string | number)[] = ['5', 32, 'Daniel'];
let str15: string = arr15.join("-");

document.getElementById("ans-15")!.innerText = String(arr15);
document.getElementById("ans151")!.innerText = String(str15);