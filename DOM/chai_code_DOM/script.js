const parent = document.querySelector('.parent')
console.log(parent.children)
for(let i= 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
    if( i % 2 != 0){
       parent.children[i].style.color = 'pink' 
    }

}
