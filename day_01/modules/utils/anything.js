
// Module Design Pattern

function add (num1 , num2) {
    return num1 + num2
}

// Math - built-in object
const MAGIC_NUMBER = Math.round(Math.random()*100)


module.exports = {
    addTwoNumbers : add,
    luckNumber : () => MAGIC_NUMBER
}