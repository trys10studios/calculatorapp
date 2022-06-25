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

let input1 = 0;
let input2 = 0;

function clickButton(btn) {
    if (display.textContent == 0) {
        display.textContent = '';
    }
    display.textContent += btn;
}

btn1.addEventListener('click', function handleClick() {
    clickButton(btn1.textContent);
});
btn2.addEventListener('click', function handleClick() {
    clickButton(btn2.textContent);
});
btn3.addEventListener('click', function handleClick() {
    clickButton(btn3.textContent);
});
btn4.addEventListener('click', function handleClick() {
    clickButton(btn4.textContent);
});
btn5.addEventListener('click', function handleClick() {
    clickButton(btn5.textContent);
});
btn6.addEventListener('click', function handleClick() {
    clickButton(btn6.textContent);
});
btn7.addEventListener('click', function handleClick() {
    clickButton(btn7.textContent);
});
btn8.addEventListener('click', function handleClick() {
    clickButton(btn8.textContent);
});
btn9.addEventListener('click', function handleClick() {
    clickButton(btn9.textContent);
});
btn0.addEventListener('click', function handleClick() {
    clickButton(btn0.textContent);
});
// Clear button
btnClr.addEventListener('click', function handleClick() {
    display.textContent = "0";
});
// Operator buttons
btnSub.addEventListener('click', function handleClick() {
    display.textContent = input1 - input2;
});
btnAdd.addEventListener('click', function handleClick() {
    display.textContent = input1 + input2;
});
btnMulti.addEventListener('click', function handleClick() {
    display.textContent = input1 * input2;
});
btnDiv.addEventListener('click', function handleClick() {
    display.textContent = input1 / input2;
});
btnEql.addEventListener('click', function handleClick() {
    if (clickCount == 1) {
        display.textContent;
    }
});
