const display = document.getElementById("display");

let firstNumber = ""



const addNumber = function(num) {
    firstNumber += num;
    display.innerText = firstNumber;
    console.log(firstNumber);
};

const deleteNumber = function(){
    firstNumber = firstNumber.slice(0, -1);
    display.innerText = firstNumber;
    console.log(firstNumber);
}