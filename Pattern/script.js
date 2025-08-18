// * * * *
// * * * *
// * * * *
// * * * *

// pattern 3*3 numbers
// let num = 3;
// for(let i = 1;i<=num;i++){
//     for(let j = 1;j<=num;j++){
//         process.stdout.write(j + " ");
//     }
//     console.log();
// }
// console.log();
// pattern 3*3 stars
for(let i = 1;i<=num;i++){
    for(let j = 1;j<=num;j++){
        process.stdout.write("*" + " ")
    }
    console.log();
}
console.log();
// pattern 3*4 num
for(let i = 1;i<=num;i++){
    for(let j = 1;j<=num+1;j++){
        process.stdout.write(j + " ")
    }
    console.log();
}
console.log();
// pattern 3*4 stars
for(let i = 1;i<=num;i++){
    for(let j = 1;j<=num+1;j++){
        process.stdout.write("*" + " ")
    }
    console.log();
}

 // pattern 3*3 character
 let ch = 'A';
 let no = 3;
 for(let i = 0; i<no;i++){
    for(let j=0;j<no;j++){
        process.stdout.write(ch + " ");
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
    }
    console.log();
 }
 console.log();
//pattern triangle 4*4
 let n = 4;
 for(let i = 0; i<n;i++){
    for(let j = 0;j<i+1;j++){
        process.stdout.write(i + 1 + " ");
    }
    console.log();
 }

//pattern 3*3
//          *  
//        *   *
//      *   *   *
// i for row & j for column 
// let r=8;
// for(let i = 0;i<r;i++){
//     for(let k = 0; k< (r-i-1); k++){
//         process.stdout.write(" ");
//     }
//     for(let j=0;j<i+1;j++){
//         process.stdout.write(" " + "*");
//     }
//     console.log();
// }


