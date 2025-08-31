//  const arr = [1,2,3,4,5];
//  for (const element of arr) {
//   //  console.log(element);
//  }

// const greeting = "Hello, World!";
// for (const char of greeting){
//   //  console.log(char);
// }
// // maps
// const map = new Map()
// map.set('IN', 'india')
// map.set('USA', 'America')
// // console.log(map)
// for (const [key,value] of map) {
    // console.log(key,value)
// }

// const mygameobj = {
//   'game1': 'valorant',
//   'game2': 'need for speed',
//   'game3': 'gta sanadreas',
//   'game4': 'mili militiya'
// }

// for (const keys in mygameobj){
//   console.log(`${keys} - ${mygameobj[keys]}`)
// }
// let array = ["js","ruby","python","c++","flutter"]
// for(const element in array){
//   console.log(element,array[element])
// }

// const friends = ["lucky","rozy","hanshika","manish","dhirendra","so on.."];
// friends.forEach( (friend,idx) =>{
//   console.log(friend,idx);
// })

// const mycoding = [
//   {
//     languageName: "javascript",
//     fileName: "js",
//   },
//   {
//     languageName: "react",
//     fileName: "react",
//   },
//   {
//     languageName: "html",
//     fileName: "html",
//   },
//   {
//     languageName: "css",
//     fileName: "css",
//   }

// ]

// mycoding.forEach( (language) =>{
//   console.log(language.languageName)
// })

// filter

// const someNums = [1,2,3,4,5,6,7,8,9,10]
// const reply = someNums.filter( (num) =>{
//   return  num<5
// })
// console.log(reply)

                                  // chaining ( means use multiple methods together)
// const playnumber = [1,2,3,4,5,6,7,8,9]
// const newnumber = playnumber.map( (num) =>{
//   return num*10
// }).map( (num) =>{
//   return num +1
// }).filter( (num) =>{
//   return num>=40
// })

// console.log(newnumber)

// reduce
 
// const reducearray = [1,2,3,4,5,6]
// const news = reducearray.reduce( (prev,curr) =>{
//   console.log(`${prev} and ${curr}`)
//   return prev+curr
// },0)
// console.log(news)

// const shopingCart = [
//   {
//     itemName: "chocos",
//     price: 10
//   },
//   {
//     itemName: "chocolate",
//     price: 100
//   },
//   {
//     itemName: "top",
//     price: 299
//   },
//   {
//     itemName: "jeans",
//     price: 899
//   },
//   {
//     itemName: "handbag",
//     price: 999
//   },
// ]

// const result = shopingCart.reduce( (prev,curr) =>{
//   return prev+curr.price
// },0)
// console.log(result)
