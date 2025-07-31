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
