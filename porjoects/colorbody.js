//generate randome  color
const randomColor = function (){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
       color += hex[Math.floor(Math.random() * 16)];
       if(color === "#000"){
        document.querySelector('#3').style.color = "white";
       }
    }
    return color;
}

// set color to the body

const setcolor = () =>{
    setInterval(changeBackground, 1000)
    function changeBackground(){
       document.body.style.backgroundColor = randomColor()
    }
}

setcolor()