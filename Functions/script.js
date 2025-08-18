// function to check vovles in a string                             --Traditional Function--

function countVowels(str){
    count = 0;
    console.log(str);
    for(let i = 0; i<str.length;i++){
     if(str[i] === "a"|| str[i] === "e"|| str[i] === "i" || str[i] === "o" || str[i] === "u"){
        count++;
     }
    }
    return(count);
}

let result = countVowels("lucky");
console.log(result); 

//same vovel function                                               --Arrow Function--

let ans = (str) =>{
    count = 0;
    console.log(str);
    for(let i = 0; i<str.length;i++){
        if(str[i] === "a"|| str[i] === "e"|| str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++;
        }
    }
    return(count);
}
 let reslt= ans("saraswati");
 console.log(reslt);

 // for each loop function
// print square for eh number in array

let arr = [1,2,3,4,5];
arr.forEach((val,idx) =>{
    arr=val*val;
    console.log(arr,idx);
})
