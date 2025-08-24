let modebtn = document.querySelector("#mdbtn");
let currmode = "light";
let bodycolor = document.querySelector("body"); 

modebtn.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark";
        bodycolor.classList.add("darkmode");
        bodycolor.classList.remove("lightmode")
        modebtn.innerText = "batmiz...."
    } 
    else{
        currmode = "light";
        bodycolor.classList.add("lightmode");
        bodycolor.classList.remove("darkmode")
        modebtn.innerText = "shut Up"
    }
    //  console.log(currmode)
});

let hoverme = document.querySelector("#over");
let currhover = "hover me"
 hoverme.addEventListener("mouseover", () =>{
    hoverme.innerText = "thanks!"  
    hoverme.style.backgroundColor = "pink";
})
 hoverme.addEventListener("mouseout", () => {
            hoverme.innerText = "hover me";
            hoverme.style.backgroundColor = "white";
});

































// Print all elements of an array using a for loop.
// let arr = [1,2,3,4,5,6,7,8];
// for (const el of arr) {
//     console.log(el);
// }
// console.log("2nd loop")
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log("3nd loop")
// for (const el in arr) {
//    console.log(arr[el]);
// }

// Find the maximum and minimum number in an array.

// let arr = [1,2,3,4,5,6,7];
// let min = arr[3];
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]< min){
//         min = arr[i];
//     }
// }
// console.log(min);

// let arr = [1,2,3,4,5,6,7];
// let max= arr[2];
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

// Count how many even and odd numbers are in an array.

// let arr =[1,2,3,4,5,6,7,8,9];
// let even = 0;
// let odd = 0;
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//         even += 1;
//     }
//     else{
//         odd += 1;
//     }
// }
// console.log(even)
// console.log(odd)

//Reverse an array without using any built-in method.     
//                                                        --------nhi hue----------
//Check if an array is palindrome or not.


// function sum(a,b){
//     console.log(a+b);
// }
//  sum(5,5)

// let sum = (a,b) =>{
//     console.log(a+b);
// }
// sum(5,5)

