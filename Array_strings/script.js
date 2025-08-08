//username with @ and length-

// let fullName = prompt("enter your fullname");
// username = fullName;
// console.log( "@"+ username + fullName.length);

//Average of an array-

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i = 0; i<marks.length;i++){
//      sum = sum + marks[i];
//      avg = sum/marks.length;
// }
// console.log(avg);

// apply 10%offer on items in array-                          

let prices = [250, 645, 300, 900,50];
console.log(prices);

for(let i= 0;i<prices.length;i++){
    let offer = prices[i]/10;
    prices[i]= prices[i]-offer;
}
console.log(prices);


// companies array --
let companies = ["Bloomberg", "Microsoft", "Uber","Google", "IBM","Netflix"];
console.log(companies);
//remove 1st company from array
console.log( companies.shift(0)); 
console.log( companies);
//add uber and ola in its space
companies.unshift("uber" ,"ola" );
console.log(companies);
//add amazone at the end
companies.push("Amazone");
console.log(companies);

