const display = document.getElementById("display");
const plus = document.getElementById("plus")

let displayNumber = "";
let storedNumber = "";
let storedOperator = "";

const updateDisplay = () => {
    display.innerText = displayNumber;
};


//ADD NUMBER TO THE DISPLAY
const addNumber = function(num) {
    displayNumber += num;
    updateDisplay();
    //console.log(displayNumber);
}

//DELETE LAST NUMBER FROM DISPLAY
const deleteNumber = function(){
    displayNumber = displayNumber.slice(0, -1);
    updateDisplay()
    //console.log(displayNumber);
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
    if (storedNumber !== ""){
        operate(storedNumber, displayNumber, storedOperator);
    }
    storedOperator = op;
    storedNumber = displayNumber;
    displayNumber = "";
    console.log(`DN: ${displayNumber} SN: ${storedNumber}`)
}

const operate = function (n1, n2, operator){
    if (displayNumber == "" || storedNumber == "" || storedOperator == ""){
        return;
    } else{
        displayNumber = String((operator(parseFloat(n1), parseFloat(n2))));
        updateDisplay();
    }
    storedOperator = "";

    
}
