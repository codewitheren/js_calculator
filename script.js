var display = document.querySelector(".calculator-input");
var screen = document.querySelector(".calculator-screen");

var keys = document.querySelector(".calculator-keys");

var displayValue = "0";
var firstValue = null;
var operator = null;
var waitFlag = false;
var okey = false;

screen.value = "0";

function updateScreen(param){
    screen.value = screen.value === '0'? param : screen.value + param;
}

function screenClear(){
    screen.value = "0";
}

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener("click", function(e){
    var element = e.target;
    if(element.type != "button")
        return ; 
    if(element.className == "operator" || element.className == "operator equal-sign")
    {
        inputOperator(element.value);
        return;
    }
    if(element.className == "clear")
    {
        inputClear();
        updateDisplay();
        return;
    }
    if(element.className == "decimal")
    {
        inputDecimal();
        updateDisplay();
        return;
    }
    inputNumber(element.value);
    updateDisplay(); 
});


function inputNumber(number){
    if(waitFlag === true)
    {
        displayValue = "0";
        waitFlag = false;
    }
    if(okey && !screen.value.includes('+') && !screen.value.includes('-') && !screen.value.includes('*') && !screen.value.includes('/')){
        screenClear();
        okey = false;
    }
    displayValue = displayValue === '0'? number : displayValue + number;
    updateScreen(number);

}

function inputDecimal(){
    if(!displayValue.includes(".")){
        displayValue += '.';
    }
    if(screen.value === '0'){
        updateScreen('0.');
    }
    else if(!screen.value.includes(".") || screen.value.includes('+') || screen.value.includes('-') || screen.value.includes('*') || screen.value.includes('/'))
        updateScreen('.');
}

function inputClear(){
    displayValue = "0";
    firstValue = null;
    operator = null;
    waitFlag = false;
    screenClear();
}

function inputOperator(op){
    var value = parseFloat(displayValue);
    updateScreen(op);
    if(firstValue === null){
        firstValue = value; 
    }
    else if(operator && waitFlag === false){
        screenClear();
        const result = calculate(firstValue, operator, value);
        displayValue = String(result);
        firstValue = displayValue;
        updateScreen(result);
        updateDisplay();
        okey = true;
    }
    waitFlag = true;
    operator = op;
}

function calculate(fir, ope, val){
    var total;
    if(ope === '+'){
        total =  parseFloat(fir) + parseFloat(val);
    }
    else if(ope === '-'){
        total = fir - val;
    }
    else if(ope === '*'){
        total = fir * val;
    }
    else if(ope === '/'){
        total = fir / val;
    }
    else{
        total = val;
    }
    return parseFloat(total.toFixed(4));
}