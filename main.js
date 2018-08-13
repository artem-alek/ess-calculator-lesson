let showbox = document.getElementById("showbox");
let operation = "";
let leftSideValue = "";
let rightSideValue = "";
let answer = null;
let multipleOperationvalue = null;

// If true then its leftSideValue, if false its rightSideValue
let whichSideOperationToggle = true;

let button0 = document.getElementById("buttonzero");
button0.addEventListener("click", buttonNum0);

let button1 = document.getElementById("button1");
button1.addEventListener("click", buttonNum1);

let button2 = document.getElementById("button2");
button2.addEventListener("click", buttonNum2);

let button3 = document.getElementById("button3");
button3.addEventListener("click", buttonNum3);

let button4 = document.getElementById("button4");
button4.addEventListener("click", buttonNum4);

let button5 = document.getElementById("button5");
button5.addEventListener("click", buttonNum5);

let button6 = document.getElementById("button6");
button6.addEventListener("click", buttonNum6);

let button7 = document.getElementById("button7");
button7.addEventListener("click", buttonNum7);

let button8 = document.getElementById("button8");
button8.addEventListener("click", buttonNum8);

let button9 = document.getElementById("button9");
button9.addEventListener("click", buttonNum9);

let buttonequal = document.getElementById("buttonequal");
buttonequal.addEventListener("click", equal);

let buttonplus = document.getElementById("buttonplus");
buttonplus.addEventListener("click", plus);

let buttonDivide = document.getElementById("buttondivide");
buttonDivide.addEventListener("click", divide);

let buttonMultiply = document.getElementById("buttonx");
buttonMultiply.addEventListener("click", multiply);

let buttonSubtract = document.getElementById("buttonsub");
buttonSubtract.addEventListener("click", subtract);

let buttonC = document.getElementById("buttonC");
buttonC.addEventListener("click", clearValues);


function buttonNum0() {
    showbox.innerHTML += "0";
    if (whichSideOperationToggle) {
        leftSideValue += "0";
    } else {
        rightSideValue += "0";
    }
 }

function buttonNum1() {
   showbox.innerHTML += "1";
   if (whichSideOperationToggle) {
       leftSideValue += "1";
   } else {
       rightSideValue += "1";
   }
}

function buttonNum2() {
    showbox.innerHTML += "2";
    if (whichSideOperationToggle) {
        leftSideValue += "2";
    } else {
        rightSideValue += "2";
    }
}
function buttonNum3() {
    showbox.innerHTML += "3";

    if (whichSideOperationToggle) {
        leftSideValue += "3";
    } else {
        rightSideValue += "3";
    }
}
function buttonNum4() {
    showbox.innerHTML += "4";

    if (whichSideOperationToggle) {
        leftSideValue += "4";
    } else {
        rightSideValue += "4";
    }
}
function buttonNum5() {
    showbox.innerHTML += "5";

    if (whichSideOperationToggle) {
        leftSideValue += "5";
    } else {
        rightSideValue += "5";
    }
}
function buttonNum6() {
    showbox.innerHTML += "6";

    if (whichSideOperationToggle) {
        leftSideValue += "6";
    } else {
        rightSideValue += "6";
    }
}
function buttonNum7() {
    showbox.innerHTML += "7";

    if (whichSideOperationToggle) {
        leftSideValue += "7";
    } else {
        rightSideValue += "7";
    }
}
function buttonNum8() {
    showbox.innerHTML += "8";

    if (whichSideOperationToggle) {
        leftSideValue += "8";
    } else {
        rightSideValue += "8";
    }
}
function buttonNum9() {
    showbox.innerHTML += "9";

    if (whichSideOperationToggle) {
        leftSideValue += "9";
    } else {
        rightSideValue += "9";
    }
}

function equal() {
    showbox.innerHTML += " = ";

    calculate();
}

function plus() {
    showbox.innerHTML += " + ";
    operation = "+";
    whichSideOperationToggle = false;
}

function subtract() {
    showbox.innerHTML += " - ";
    operation = "-";
    whichSideOperationToggle = false;
}

function divide() {
    showbox.innerHTML += " / ";
    operation = "/";
    whichSideOperationToggle = false;
}

function multiply() {
    showbox.innerHTML += " x ";
    operation = "x";
    whichSideOperationToggle = false;
}

function calculate() {
    // 1. what operation they used??? (solve with IF statements, what operator?)
    // 2. what numbers they used?
    if (operation === "+") {
        // what numbers do we use?
        answer = parseInt(leftSideValue) + parseInt(rightSideValue);
        showbox.innerHTML = answer;
    }
    if (operation === "-") {
        // what numbers do we use?
        answer = parseInt(leftSideValue) - parseInt(rightSideValue);
        showbox.innerHTML = answer;
    }
    if (operation === "/") {
        // what numbers do we use?
        answer = parseInt(leftSideValue) / parseInt(rightSideValue);
        showbox.innerHTML = answer;
    } 
    if (operation === "x") {
        // what numbers do we use?
        answer = parseInt(leftSideValue) * parseInt(rightSideValue);
        showbox.innerHTML = answer;
    } 
}

function clearValues() {
    showbox.innerHTML = "";
    leftSideValue = "";
    rightSideValue = "";
    operation = "";
    answer = null;
    whichSideOperationToggle = true;
}