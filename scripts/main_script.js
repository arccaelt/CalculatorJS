"use strict";

generateBasicLayout();

function handleNumberButtonClicks(event) {
    let value = event.target.innerHTML;
    
    // add it to the display
    let display = document.getElementById("calculator_display");
    display.innerHTML += value;
    console.log(display);
}

function handleFunctionButtonClicks(event) {
    let display = document.getElementById("calculator_display");
    let type = event.target.innerHTML;

    console.log(type);

    if("+-/*()".includes(type))
        display.innerHTML += type;
    else if(type == "C")
        display.innerHTML = "";
    else if(type == "&lt;")
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    else if("sin,cos,log2,log10".includes(type))
    {
        if(type == "log10")
            display.innerHTML += "Log10(";
        else
            display.innerHTML += type + "(";
    }
    else if(type == "√")
        display.innerHTML += "√(";
    else if(type == "x^2")
        display.innerHTML += "^2";
    else if(type == "x!")
        display.innerHTML += "!";
    else if(type == "x^y")
        display.innerHTML += "^";
    else // =
    {
        let display = document.getElementById("calculator_display");
        let expr = display.innerHTML;

        let mode = getCurrentMode();
        console.log(mode);
        let result;
        if(mode == 0)
        {
            result = basicCalculator.evalExpression(expr);
            
        }
        else if(mode == 1)
        {
            result = advancedCalculator.evalExpression(expr);
        }
        console.log(`result: ${result}`);
        display.innerHTML = result;
    }
}

function getCurrentMode()
{
    let select = document.getElementById("mode");
    return select.selectedIndex;
}

function handleModeChange(event)
{
    let idx = getCurrentMode();
    let data = [generateBasicLayout, generateAdvancedLayout];
    data[idx]();
}

function addHandlers()
{
    let buttons = document.getElementsByClassName("number_button");
    for(let button of buttons)
        button.onclick = handleNumberButtonClicks;

    let func_buttons = document.getElementsByClassName("function_button");
    for(let button of func_buttons)
        button.onclick = handleFunctionButtonClicks;

    // when chaning layout, call the appropiat function
    let select = document.getElementById("mode");
    select.onchange = handleModeChange;
}