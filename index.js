let num1 = 5;
let num2 = 10;

document.getElementById("first-num").textContent = 5;
document.getElementById("second-num").textContent = num2;

let resultMessage = document.getElementById("result");
let result = 0;

function add(){
    
    result = num1+num2
    resultMessage.textContent = "Result: " + result;

}
function subtract(){
    
    result = num1-num2
    resultMessage.textContent = "Result: " + result;

}
function multiply(){
    
    result = num1*num2
    resultMessage.textContent = "Result: " + result;

}
function divide(){
    
    result = num1/num2
    resultMessage.textContent = "Result: " + result;

}