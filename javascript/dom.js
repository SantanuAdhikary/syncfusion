
// !  how to target

let heading = document.getElementById("heading1")

console.log(heading)


let box1 = document.getElementById("box1")
console.log(box1)


// !  how to write 


box1.innerHTML = " <h1> I am box1 from js file</h1> <p> hello </p>"


// !  how to write css 

box1.style.color="red"


// ! how to create element 

let heading2 = document.createElement("h2")

heading2.innerText = "i am heading2"

box1.append(heading2)




let box2 = document.getElementById("box2")

box2.innerHTML = " <h2>hello i am fine</h2> "



let display =()=>{
    console.log('displayingg....')
}

// display()




let print =()=>{
    let inp1 =parseInt( document.getElementById("inp1").value)
    let inp2 =parseInt( document.getElementById("inp2").value)

    // console.log(inp1 + inp2)

    let add = inp1 + inp2 

    let result = document.getElementById("result")

    result.innerHTML = `<h1>the addition of ${inp1}  and ${inp2} is ${add}</h1>`
}



// !  string interpolation

let a = 10 

let b = 20

// the value of a is 10 

console.log(` the value of a is ${a}`)

console.log(` the addition of ${a}  and ${b} is ${a+b}`)