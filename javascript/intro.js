
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