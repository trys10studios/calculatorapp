const display = document.getElementById('display'); // Output for calculation

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');

const btnClr = document.getElementById('clear');
const btnSub = document.getElementById('btn-sub');
const btnAdd = document.getElementById('btn-add');
const btnMulti = document.getElementById('btn-multi');
const btnDiv = document.getElementById('btn-div');
const btnEql = document.getElementById('btn-eql');
const btnDec = document.getElementById('btn-dec');

let clicked = false;

display.textContent = 0;

function clickButton(btnText, btnNum) {

    if (display.textContent == 0) {
        display.textContent = "";
    }
    if (btnText.textContent != "-" || btnText.textContent != "*") {
        clicked = false;
        display.textContent += btnNum;
    }
}

btn1.addEventListener('click', function handleClick() {
    clickButton(btn1.textContent, 1);
});
btn2.addEventListener('click', function handleClick() {
    clickButton(btn2.textContent, 2);
});
btn3.addEventListener('click', function handleClick() {
    clickButton(btn3.textContent, 3);
});
btn4.addEventListener('click', function handleClick() {
    clickButton(btn4.textContent, 4);
});
btn5.addEventListener('click', function handleClick() {
    clickButton(btn5.textContent, 5);
});
btn6.addEventListener('click', function handleClick() {
    clickButton(btn6.textContent, 6);
});
btn7.addEventListener('click', function handleClick() {
    clickButton(btn7.textContent, 7);
});
btn8.addEventListener('click', function handleClick() {
    clickButton(btn8.textContent, 8);
});
btn9.addEventListener('click', function handleClick() {
    clickButton(btn9.textContent, 9);
});
btn0.addEventListener('click', function handleClick() {
    clickButton(btn0.textContent, 0);
});
// Clear button
btnClr.addEventListener('click', function handleClick() {
    display.textContent = '0';
    clicked = false;
});
// Operator buttons
btnSub.addEventListener('click', function handleClick() {
    if (!clicked) {
        clickButton(btnSub.textContent, "-");
        clicked = !clicked;
    }
});
btnAdd.addEventListener('click', function handleClick() {
    if (!clicked) {
        clickButton(btnSub.textContent, "+");
        clicked = !clicked;
    }
});
btnMulti.addEventListener('click', function handleClick() {
    if (!clicked) {
        clickButton(btnMulti.textContent, "*");
        if (display.textContent[0] == "*") {
            display.textContent = "0";
        }
        clicked = !clicked;
    }
});
btnDiv.addEventListener('click', function handleClick() {
    if (!clicked) {
        clickButton(btnMulti.textContent, "/");
        if (display.textContent[0] == "/") {
            display.textContent = "0";
        }
        clicked = !clicked;
    }
});
btnDec.addEventListener('click', function handleClick() {
    if (!clicked) {
        clickButton(btnSub.textContent, ".");
        clicked = !clicked;
    }
});
btnEql.addEventListener('click', function handleClick() {
    if (display.textContent[display.textContent.length - 1] == '-' ||
        display.textContent[display.textContent.length - 1] == '*') {
        // if the last input is an operator, return;
        return;
    }
    const calculate = eval(display.textContent);
    display.textContent = calculate;
    clicked = false;
});
