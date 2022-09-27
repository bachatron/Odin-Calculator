const display = document.getElementById("display");
const plus = document.getElementById("plus")
const operatorDisplay = document.getElementById("operatorDisplay");
const storedDisplay = document.getElementById("storedDisplay");


let displayNumber = "";
let storedNumber = "";
let storedOperator = "";

const updateDisplay = () => {
    display.innerText = displayNumber;
    storedDisplay.innerText = storedNumber;
    operatorDisplay.innerText = storedOperator;
};

//ADD NUMBER TO THE DISPLAY
const addNumber = function(num) {
    displayNumber += num;
   updateDisplay()
    console.log(displayNumber);
}

//DELETE LAST NUMBER FROM DISPLAY
const deleteNumber = function(){
    displayNumber = displayNumber.slice(0, -1);
   updateDisplay()
    console.log(displayNumber);
}

//RESET DISPLAY AND AL STORED VALUES
const clearDisplay = () => {
    displayNumber = storedNumber = storedOperator = "";
   updateDisplay()
}

//SUM SUBSTRACT MULTIPLY AND DIVIDE FUNCTIONS
const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

//STORE THE SELECTED OPERATOR
const setOperator = (op) => {
    storedOperator = op;
    storedNumber = displayNumber;
    displayNumber = "";
}

const operate = function (n1, n2, operator){
    if (storedOperator == "" || displayNumber == "" || storedNumber == "") {
        return;
    } else {
        displayNumber = String((operator(parseInt(n1), parseInt(n2))));
        storedNumber = "";
    }
    updateDisplay()
    console.log(displayNumber);
}
