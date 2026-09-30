// Q-1 Create a program to reverse a given number using a loop.

let num1:number = 321;
let rev1:number = 0;

document.getElementById("q-1")!.innerText = String(num1);

while(num1 > 0) {

    rev1 = (10*rev1) + num1 % 10;
    num1 = Math.floor(num1/10);

}

document.getElementById("ans-1")!.innerText = String(rev1);


// Q-2 Develop a program to check whether a number is a palindrome.

let num2:number = 11122111;
let rev2:number = 0;
let tem2:number = num2;
let output2:string;

document.getElementById('q-2')!.innerText = String(num2);

while(tem2 > 0) {

    rev2 = (10*rev2) + tem2 % 10;
    tem2 = Math.floor(tem2/10);

}

document.getElementById('ans-2')!.innerText = String(rev2);

if(rev2 == num2) {
    output2 = "The Given Number is Palindrome."
} else {
    output2 = "The Given Number is not Palindrome."
}

document.getElementById('ans-21')!.innerText = String(output2);


// Q-3 Write a program to print the Fibonacci series up to n terms using a loop.

let a3:number = 0;
let b3:number = 1;
let c3:number;

let total_num3:number = 10;

document.getElementById('q-3')!.innerText = String(total_num3);

for(let i3 = 1; i3 <= total_num3; i3++) {

    document.getElementById('ans-3')!.innerText += " " + String(a3) + ",";

    c3 = a3 + b3;
    a3 = b3;
    b3 = c3;

}


// Q-4 Create a program to find the factorial of a number using a loop.

let num4:number = 5;
let fact4:number = 1;

document.getElementById('q-4')!.innerText = String(num4);

while(num4 > 0) {

    fact4 = fact4 * num4;
    num4--;

}

document.getElementById('ans-4')!.innerText = String(fact4);


// Q-5 Develop a program to check whether a number is a prime number.

let num5:number = 12;
let isprime5:boolean = true;
let prime5:string;

document.getElementById('q-5')!.innerText = String(num5);

if(num5 > 1) {

    for(let i5 = 2; i5 < num5; i5++) {

        if(num5 % i5 === 0) {
            isprime5 = false
            break;
        }

    }

} else {
    isprime5 = false;
    prime5 = "Please Enter Greater Than 1."
}

if(isprime5) {
    prime5 = num5 + " is a prime number."
} else {
    prime5 = num5 + " is not a prime number."
}

document.getElementById('ans-5')!.innerText = prime5;


// Q-6 Write a program to count the total number of digits in a given number.

let num6:number = 2365;
let total6:number = 0;

document.getElementById('q-6')!.innerText = String(num6);

while(num6 > 0) {
    
    total6++;
    num6 = Math.floor(num6/10);

}

document.getElementById('ans-6')!.innerText = String(total6);


// Q-7 Create a program to calculate the sum of digits of a number.

let num7:number = 6595;
let sum7:number = 0;

document.getElementById('q-7')!.innerText = String(num7);

while(num7 > 0) {

    sum7 = sum7 + (num7 % 10);
    num7 = Math.floor(num7/10);

}

document.getElementById('ans-7')!.innerText = String(sum7);


// Q-8 Develop a program to check whether a number is an Armstrong number.

let num8:number = 1535;
let count8:number = 0;
let sum8:number = 0;
let tem8:number = num8;
let output8:string;

while(tem8 > 0) {

    count8++;
    tem8 = Math.floor(tem8 / 10);

}

tem8 = num8;

while(tem8 > 0) {

    let reminder8 = tem8 % 10;
    sum8 = sum8 + (Math.pow(reminder8, count8))
    tem8 = Math.floor(tem8 / 10);

}

if(num8 === sum8) {
    output8 = num8 + " is an Armstrong number."
} else {
    output8 = num8 + " is not an Armstrong number."
}

document.getElementById('q-8')!.innerText = String(num8);
document.getElementById('ans-8')!.innerText = String(sum8);
document.getElementById('ans-81')!.innerText = String(output8);


// Q-9 Write a program to calculate the power of a number using a loop.

let base9:number = 3;
let exponent9:number = 5;
let power9:number = 1;

for(let i = 1; i <= exponent9; i++) {

    power9 = power9 * base9;

}

document.getElementById('q-9')!.innerText = String(base9);
document.getElementById('q-91')!.innerText = String(exponent9);
document.getElementById('ans-9')!.innerText = String(power9);


// Q-10 Create a program to print the following number pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i:number = 1; i <= 5; i++) {

    for(let j:number = 1; j <= i; j++) {
        document.getElementById('ans-10')!.innerText += " " + String(j); 
    }

    document.getElementById('ans-10')!.innerHTML += "<br/>"; 

}


// Q-11 Create a program to print the following number patten:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for(let i:number = 5; i >= 1; i--) {

    for(let j:number = 1; j <= i; j++) {
        document.getElementById('ans-11')!.innerText += " " + String(j); 
    }

    document.getElementById('ans-11')!.innerHTML += "<br/>"; 

}


// Q-12 Create a program to print the following number patten:
// 1 2 3 4 5
// * 1 2 3 4
// * * 1 2 3
// * * * 1 2
// * * * * 1

for(let i:number = 5; i >= 1; i--) {

    for(let j:number = i; j < 5; j++) {
        document.getElementById('ans-12')!.innerText += "  " +"* "; 
    }

    for(let k = 1; k <= i; k++) {
        document.getElementById('ans-12')!.innerText += " " + String(k); 
    }

    document.getElementById('ans-12')!.innerHTML += "<br/>";

}


// Q-13 Create a program to print the following number patten:
// * * * * 1
// * * * 1 2
// * * 1 2 3
// * 1 2 3 4
// 1 2 3 4 5

for(let i:number = 1; i <= 5; i++) {

    for(let j:number = 5; j > i; j--) {
        document.getElementById('ans-13')!.innerText += " _" + " ";
    }

    for(let k:number = 1; k <= i; k++) {
        document.getElementById('ans-13')!.innerText += " " + String(k);
    }

    document.getElementById('ans-13')!.innerHTML += "<br/>"

}