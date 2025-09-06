function addlanguage(languageName){
    const li = document.createElement('li');
    li.innerHTML = `${languageName}`
    document.querySelector('.language').appendChild(li)
}
addlanguage("React")
const exist = document.querySelectorAll('li')
exist[1].innerText = "Python"
exist[2].innerText = "Ruby"

console.log(exist)
//edit
const edit = document.querySelector("li:nth-child(1)")
const list = document.createElement('li')
list.innerText = "java"
edit.replaceWith(list)

const change = document.querySelector('li:nth-child(2')
const li = document.createElement('li') // taki list item list me hi aye naki direct text isliye new element create kia h

li.innerText = "HTML"
change.replaceWith(li)

// remove

const lastlang = document.querySelector('li:nth-child(3)')
lastlang.remove()