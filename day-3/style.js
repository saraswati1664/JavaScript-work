//for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;

 // alert(i);  1, then 3, 5, 7, 9
//}

// Use the for loop to output even numbers from 2 to 10.

// for(let i = 2;i<=10;i++){
//     if(i%2===0){
//         alert(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// while(i<3){
//    alert( `number ${i}!` );
//    i++; 
// }
let game_num = 20;
alert("let's start the game!")
let user_num = prompt("Guess the number: ");
while(game_num !== user_num){
  if(game_num == user_num){
    alert("congratulation!");
  }
  else{
    user_num = prompt("wrong number, guess again!");
  }
} 