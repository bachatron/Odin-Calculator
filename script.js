const display = document.getElementById("display");
const plus = document.getElementById("plus")

let canUseNumbers = true;

let displayNumber = "";
let storedNumber = "";
let storedOperator = "";

const updateDisplay = () => {
    display.innerText = displayNumber;
};


//ADD NUMBER TO THE DISPLAY
const addNumber = function(num) {
    if (num === "." && displayNumber.includes(".") || !canUseNumbers){
        return;
    } else{
        displayNumber += num;
        updateDisplay();
        //console.log(displayNumber);
    }
}

//DELETE LAST NUMBER FROM DISPLAY
const deleteNumber = function(){
    if (canUseNumbers) {
        displayNumber = displayNumber.slice(0, -1);
        updateDisplay()
        //console.log(displayNumber);
    }
}

//RESET DISPLAY AND AL STORED VALUES
const clearDisplay = () => {
    displayNumber = storedNumber = storedOperator = "";
    canUseNumbers = true;
    updateDisplay()
}

//SUM SUBSTRACT MULTIPLY AND DIVIDE FUNCTIONS
const add = (n1, n2) => n1 + n2;
const substract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

//STORE THE SELECTED OPERATOR
const setOperator = (op) => {
    if (displayNumber === "ERROR" || displayNumber === ".") {
        return;
    } else {
        if (storedNumber !== "" || canUseNumbers){
            operate(storedNumber, displayNumber, storedOperator);
        }
        canUseNumbers = true;
        storedOperator = op;
        storedNumber = displayNumber;
        displayNumber = "";
        //console.log(`DN: ${displayNumber} SN: ${storedNumber}`)
    }
}

const operate = function (n1, n2, operator){
    if (n2 == "" || n1 == "" || operator == ""){
        return;
    } else if (displayNumber === "0" && operator == divide){
        displayNumber = "ERROR";
    } else{
        //Convert the stored strings into floats and after the operation is done, re-convert the result into string again.
        displayNumber = (operator(parseFloat(n1), parseFloat(n2)));
    }
    updateDisplay();
    canUseNumbers = false;
    storedOperator = "";
}

//document.addEventListener('keypress', (event) => {
//    var name = event.key;
//    var code = event.code;
    // Alert the key name and key code on keydown
//    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//  }, false);
  

document.addEventListener('keypress', (event) =>{
    const numpad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Enter', '.', 'Delete'];
    //const stringedKey = String(event.key);
    //console.log(stringedKey === "Delete")
    //console.log (stringedKey in numpad)
    if (event.key in numpad){
        addNumber(event.key);
    }
    //addNumber(event.key)
    //numpad.push(event.key)
    console.log(event.key);
    
});

const addKeyboardNum = function (a) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (a.innerText in nums) {
        a.addEventListener("onkeypress", function(){
            addNumber(a.innerText);
        })
    }
}

