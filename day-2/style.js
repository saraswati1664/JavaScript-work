// type conversion
let a = "456";  //string 
a = Number(a);
console.log(a);
console.log(typeof a);  //number 

let name = "saras"; //string
name = Boolean(name);
console.log(name);
console.log(typeof name); //boolean

let num = 10; //number
console.log(num);
console.log(typeof num);
num = BigInt(num); //bigint
console.log(num);

//operators-

//unary (single)

let anynum = 1;
anynum = -anynum;
console.log(anynum); //-1

let anumber = -1;
anumber = -anumber;
console.log(anumber);

//binary 

// (addition)
let first = 20, second = 30;
let result = first + second;
console.log(result);

//modular

let num1 = 5 , num2 = 2;
let answer = 5%2;
console.log(answer);

//Exponentiation (raise tothe power)
let num_1 = 5 , num_2 = 2;
let ans = num_1**num_2;
console.log(ans);


//  bitwise XOR                                           (query h........)
let tryans = num_1^num_2;
console.log(tryans);// 7 answer


//bitwise operators...............................
                                               //TASKS..
//The postfix and prefix forms (++ , --).

let number1 = 1, number2 = 1;

let number3 = ++number1; // 2
let number4 = number2++; // 1
console.log(number3);
console.log(number4);

//Assignment result
let sara = 2;

let sara2 = 1 + (sara *= 2);
console.log(sara2); //5

console.log(" \t \n" - 2);  // 14 questions try.

//tried on live server
let x = prompt("First number?", 1);
let y = prompt("Second number?", 2);

alert(+x + +y); // should be three default not 12.