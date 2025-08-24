// color on click
let keys = document.querySelectorAll(".buttonstyle");
keys.forEach(key =>{
    key.addEventListener("click",()=>{
         key.style.backgroundColor = "rgba(77, 75, 75, 0.95)";
         setTimeout(() => {
         key.style.backgroundColor = "rgb(53, 52, 52)";
         }, 200);
    })
})

let equal_btn = document.querySelector("#eqlbtn");
equal_btn.addEventListener("click",() =>{
    equal_btn.style.backgroundColor = "rgba(255, 125, 12, 0.97)";
    setTimeout(() =>{
        equal_btn.style.backgroundColor = "rgb(225, 107, 5)";
    }, 200);
})
//work on click
const display = document.querySelector("#input_nums") // imput box
function AddToDisplay(input){
    display.value += input;
}
let popOne = document.querySelector("#singlePop");  // del one element from input
popOne.addEventListener("click", () =>{
   deleteOne();
})
function deleteOne(){
    display.value = display.value.toString().slice(0, -1)
}
const modulas = document.querySelector("#modulas"); // percent
modulas.addEventListener("click",() =>{
    AddToDisplay("%")
})
const divide = document.querySelector("#divide");  // divide
divide.addEventListener("click",() =>{
    AddToDisplay("/")
})
const multi = document.querySelector("#multi");  // multiply
multi.addEventListener("click",() =>{
    AddToDisplay('*')
})
const minus = document.querySelector("#minus"); // minus
minus.addEventListener("click",() =>{
    AddToDisplay('-')
})
const plus = document.querySelector("#plus");  // plus
plus.addEventListener("click",() =>{
     AddToDisplay('+')  
})
let clrfunc = document.querySelector("#clear") // clear all function empty input

clrfunc.addEventListener("click",() =>{
    clearTheDisplay();
})
function clearTheDisplay(){
    display.value = "";
}
let seven = document.querySelector("#seven") // seven
seven.addEventListener("click",() =>{
    AddToDisplay("7")
})

const eight = document.querySelector("#eight"); //eight
eight.addEventListener("click", () =>{
    AddToDisplay("8")
})

const nine = document.querySelector("#nine"); // nine
nine.addEventListener("click", () =>{
    AddToDisplay("9")
})
const four = document.querySelector("#four");// four
four.addEventListener("click", () =>{
    AddToDisplay('4')
})
const five = document.querySelector("#five");// five
five.addEventListener("click", () =>{
    AddToDisplay('5')
})
const six = document.querySelector("#six");// six
four.addEventListener("click", () =>{
    AddToDisplay('6')
})
const one = document.querySelector("#one");// one
one.addEventListener("click", () =>{
    AddToDisplay('1')
})
const two = document.querySelector("#two");// two
two.addEventListener("click", () =>{
    AddToDisplay('2')
})
const three = document.querySelector("#three");// three
three.addEventListener("click", () =>{
    AddToDisplay('3')
})
const zero = document.querySelector("#zero");// zero
zero.addEventListener("click", () =>{
    AddToDisplay('0')
})
const dot = document.querySelector("#dot");// dot
dot.addEventListener("click", () =>{
    AddToDisplay('.')
})
const result = document.querySelector("#eqlbtn")
result.addEventListener("click", () =>{
    calculate()
})
function calculate(){    //eql
    display.value = eval(display.value);
}