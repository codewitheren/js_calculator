var display = document.querySelector(".calculator-input");
console.log(display);

var keys = document.querySelector(".calculator-keys");
console.log(keys);

var displayValue = "";

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener("click", function(e){
    var element = e.target;
    if(element.type != "button")
        return ; 
    if(element.className == "operator" || element.className == "operator equal-sign")
    {
        console.log(element.value);
        return;
    }
    if(element.className == "clear")
    {
        console.log(element.value);
        return;
    }
    if(element.className == "decimal")
    {
        console.log(element.value);
        return;
    }
    
});

 