const display = document.getElementById("display");
const plus = document.getElementById("plus")

let displayNumber = "";
let storedNumber = "";
let storedOperator = "";



const addNumber = function(num) {
    displayNumber += num;
    display.innerText = displayNumber;
    console.log(displayNumber);
};

const deleteNumber = function(){
    displayNumber = displayNumber.slice(0, -1);
    display.innerText = displayNumber;
    console.log(displayNumber);
}

const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

const setOperator = (op) => storedOperator = op; 

const operate = function (n1, n2, operator){
    storedOperator !== "" ? displayNumber = operator(n1, n2) : undefined;
}
