//STEP 1: DECLARE VARIABLES
//STEP 2: ATTACH FUNCTIONS TO EVENTS
//STEP 3: WRITE LOGIC

//variable declarations
const display = document.getElementById("display");
let num1 = "";
//we are using num 1 as the numbers we see on the screen
let num2 = "";
//we are using num 2 to store the number for later use
let op = "";
//op is a string that upon pressing will reset num 1 and store num1 into num2


function press(num) {
    num1 += num;
    display.innerText = num1;
}
//this function uses event onClick to grab clicked number then adds upon each click

function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
}
//this function uses event onClick to set operand & set num2 & reset num 1 for further input

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerText = "0";
}
//resets display and stored data to zero

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let res = 0;
    //variable declaration
    switch (op) { //could also just use basic if statements
        case "+": //case can only check if the symbol, can't evaluate like grater than or less than
        res = a + b;
        break;
        case "-":
        res = a - b;
        break;
        case "*":
        res = a * b;
        break;
        case "/":
        res = a / b;
        break;}

    num1 = res;
    op = "";
    display.innerText = res;
}