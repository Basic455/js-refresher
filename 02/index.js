// let const var

// number, string, boolean, object, Symbol, null, undefined, Bigint

let age = 25;
const body = document.querySelector("body")
const h1 = document.createElement("h1")
h1.textContent = "Varables and data types"


body.appendChild(h1)

const ol = document.createElement("ol")
body.appendChild(ol)
const dataTypes = ["String", "Number", "Bigint", "Boolean", "Undefined", "Null", "Symbol", "Object"]

for(let i = 0; i < 8 ; i++) {
    const li = document.createElement("li")
    li.textContent = dataTypes[i]
    ol.appendChild(li)
}




// Arithmetic Operators

const h2 = document.createElement("h1")
h2.textContent = "Arithmatic Operators"
body.appendChild(h2)

const ol1 = document.createElement("ol")
body.appendChild(ol1)

const operators = ["+ :  addition", "- :   Substraction", "* :  multiplication", "/ :  Division", "% : Remainder", "** : Power"]

for(let i = 0; i < operators.length ; i++) {
    const li = document.createElement("li")
    li.textContent = operators[i]
    ol1.appendChild(li)
}