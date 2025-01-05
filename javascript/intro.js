
console.log(" i am external javascript file")


// !  how to declare variable 

// let , var , const 


let a = 10 
console.log(a);

// let a ❌  it is not possible


var b = 20 
console.log(b)    

var b = 30 
console.log(b) // ✅ it is possible

const c = 5
console.log(c)


//? var has the global scope , let and const has local scope 
//? var we can do re declaration but let we can't

{
     let d = 20 
     var e = 10 
     const f = 30

     console.log(d , e , f)
}

// console.log(d)



// !  data types 

//? 1. primitive

   // 1. number 
   //  2. boolean , 
   // 3. string ,
   //  4. undefined ,
   //  5. null, 
   // 6. bigint 

// ? 2. non-primitive

   //1. array , 2. object , 3.function

//! typeof operator is used to know the datatype of any variable

 let num1 = 10 
 console.log(num1) 
 console.log(typeof num1)   // number

 let num2 = 10.7
 console.log(typeof num2)  // number


 let num3 = Number(20)
 console.log(num3)

 let num4 = Number("20")
 console.log(num4)
 console.log(typeof num4)

 let num5 = Number.parseInt("20abc")
 console.log(num5)
 console.log(typeof num5)



//  ! 2. undefined 

// when we are declaring any variable but it is not initialized.

let myName

console.log(myName)
console.log(typeof myName)


// ! 3. null 

let myAge = null

console.log(myAge)
console.log(typeof null)  // object 


// !  4. bigInt 

let num6 = BigInt(3)
let num7 = 4n
console.log(num6)
console.log(typeof num7)


// !  String in javascript 


//! how to declare string 


  //1. by using literals 
  //2. by using object 


  let str1 = 'hello'
  let str2 = "HELLO"
  let str3 = `hello`

  console.log(str3)
  console.log(typeof str3)

  let strObj = new String("hello")
  console.log(strObj)


//   !  difference between == and ===


let ab= 10 , ba = "10"

  console.log(ab == ba)  // true
  console.log(ab === ba) // false 

console.log(str1 === strObj) // false 


//! 1. toUpperCase()

let upper = str1.toUpperCase()

console.log(upper)
console.log(str1)

// ! 2. toLowerCase()

console.log(str2.toLowerCase())
console.log(str2)

// ! 3.  charAt(index)

console.log(str1.charAt(2))

// ! 4. indexOf('character')

console.log(str1.indexOf("l"))  // 2

// !5. lastIndexOf('character')

console.log(str1.lastIndexOf("l"))  // 3


// !6. concat()

let str4 = 'hello'
let str5 = 'how are you'

console.log(str4.concat(" ",str5," ?"))


// ! 7. trim()

let str6 = "   hello  "
console.log(str6.length)

let str7 = str6.trim()
console.log(str7.length)

// ! 8. split()

// it will convert the string into array

let msg = "how are you"

let arr = msg.split(" ")
console.log(arr)


// ! 9. slice(si, ei)

// it will take two parameters but it will not inclues the last index value



let sub = "javascript"

console.log(sub.slice(-4,9))


// ! 10. substring()

console.log(sub.substring(-4))

console.log(sub.substring(8,3))




// !  function in javascript 


function add(a,b)
{
    console.log('i am add function')
    console.log(a, b )

    return a + b
}

let res = add(10,20)
console.log(res)


let multiply = function()
{
    console.log('i am function without name')
}

multiply()


// !  arrow function 


let divide = (a)=>{
    console.log('i am arrow function')
    console.log(a)
}

divide(2)


// ! higher order function and callback function 


// any function which taking another function as argument/ parameter is called higerorder function.

// the fuction we are sending as parameter to any higherorder function is called callback function. 

let hello = ()=>{
    console.log("i am hello function")
}


let hi = (age, myName, myFunc)=>{
    console.log('i am hi function')
    console.log(age, myName)

    myFunc()
    
}

hi(10,"rohit", hello)

console.log("=============")

hi(20,"virat",()=>{
    console.log('i am callback fucntion')
})

// !  array 

let arr1 = [10 , 'abc', true, [30,50]]

console.log(arr1)
console.log(arr1.length)



// arr1.push("bye")
// console.log(arr1)


let ele =arr1.pop()
console.log(ele)
console.log(arr1)


// arr1.unshift("santanu")

// console.log(arr1)

arr1.shift()
console.log(arr1)


console.log(arr1.includes('abc'))   // true


// !  slice and splice 


let arr2 = [10,20,30,40,50,60]




console.log(arr2.slice(1,4))

console.log(arr2)


// arr2.splice(1,3,"hello")

// console.log(arr2)


// arr2.splice(2,0,"hello")
// console.log(arr2)



// !   higherorder array methods 


// ! forEach()

let eles =  arr2.forEach((ele)=>{
    console.log(ele)
     return ele
})

console.log(eles)
console.log("-------------------------------")

// !  Map()

let mappedArr = arr2.map((ele)=>{
   return ele+1000
})

console.log(mappedArr)


arr2.forEach((ele , index , arr)=>{
    console.log(ele ,index,arr)
})



// !  filter()

let filteredArr = arr2.filter((ele)=>{
    return ele > 30
})

console.log(filteredArr)


// let f = arr2.filter(ele => ele > 30)
// console.log(f)


// !  reduce()

let sum = arr2.reduce((acc,ele)=>{
    
   return acc * ele
},1)

console.log(sum)


// let f2 =arr2.filter((ele)=> ele>30).map((ele)=> ele+1000).reduce((acc,ele)=> acc+ele)

// console.log(f2)


let arr3 = [5,1,3,2,9]

let asc = arr3.sort((a,b)=>{
    return a - b
})

console.log(asc)

let desc = arr3.sort((a,b)=>b -a)
console.log(desc)



// !   object 


let student = {
    sname:"abc",
    age:10,
    phNo:9898989898,
    skills:["html",'css','js'],
    add: {
        city:'chennai',
        pin:3434343
    },
    isPlayer:false
}


let ob1 = {
    sname:"xy",
    ph:8989,
    age:10
}

console.log(ob1.sname)

ob1.age = 12 

console.log(ob1)

// delete ob1.age
// console.log(ob1)

ob1.city = "chennai"
console.log(ob1)


// ! 1. Object.keys()

console.log(Object.keys(ob1))

// ! 2. Object.values()

console.log(Object.values(ob1))

// ! 3. Object.entries()

console.log(Object.entries(ob1))


// ! 4. Object.freeze()

// console.log(ob1)

// Object.freeze(ob1)

// ob1.age = 20

// delete ob1.age

// ob1.pin = 7878

// console.log(ob1)

// console.log(Object.isFrozen(ob1))


// !  Object.seal()

// console.log(ob1)

// Object.seal(ob1)

// delete ob1.age
// ob1.pin = 9898

// ob1.age = 20
// console.log(ob1)



// !  json 


console.log(ob1)

let jsonData = JSON.stringify(ob1)
console.log(jsonData)

let obb = JSON.parse(jsonData)
console.log(obb)


// !  promise 


// let p = new Promise((resolve , reject)=>{

//     // resolve("i have done this work")
//     reject("i was not well...")
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(
//     console.log('promise is there')
// )
// console.log(p)


console.log("==================================================")


// !  fetch()

// let fetchedData =  fetch("https://fakestoreapi.com/products")

// // console.log(fetchedData)


// fetchedData.then((data)=>{

//     //  console.log(data)

//     let jsonData = data.json()
//     // console.log(jsonData)

//     jsonData.then((fd)=>{
//         console.log(fd)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }).catch((err)=>{
//     console.log(err)
// })



console.log("=================================================")


// !  async await 


let getData = async ()=>{

    let fetchedData = await fetch("https://fakestoreapi.com/products")
    // console.log(fetchedData)

    let jsonData = await fetchedData.json()
    console.log(jsonData)
    
}

getData()




