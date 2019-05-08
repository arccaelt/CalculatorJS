"use strict";

let clear = function() {
    document.getElementById("calculator_display").innerHTML = "";
    document.getElementById("tbody").innerHTML = "";
}

function generateBasicLayout() 
{
    clear();
    let tb = document.getElementById("tbody");
    
    // generates the rows with this data
    let row_data = [[{ name: "<", cls: "function_button" }, { name: "C", cls: "function_button" }], 
        [{ name: "7", cls: "number_button" }, { name: "8", cls: "number_button" }, { name: "9", cls: "number_button" }, { name: "+", cls: "function_button" }],
        [{ name: "4", cls: "number_button" }, { name: "5", cls: "number_button" }, { name: "6", cls: "number_button" }, { name: "-", cls: "function_button"}],
        [{ name: "1", cls: "number_button" }, { name: "2", cls: "number_button" }, { name: "3", cls: "number_button" }, { name: "*", cls: "function_button" }],
        [{ name: "0", cls: "number_button" }, { name: "=", cls: "function_button", colSpan : 2 }, { name: "/", cls: "function_button" }]];

    for(let row of row_data)
    {
        let tr = document.createElement("tr");
        for(let data of row)
        {
            let elem = document.createElement("td");
            let btn = document.createElement("button");

            if("colSpan" in data)
                elem.colSpan = data.colSpan;

            btn.className = data.cls;
            btn.innerHTML = data.name;
            elem.append(btn);
            tr.append(elem);
        }
        tb.append(tr);
    }

    addHandlers();
    document.getElementById("calculator_display").style.width = "40rem";
}

function generateAdvancedLayout()
{
    clear();
    generateBasicLayout();
    let tb = document.getElementById("tbody");

    let data = [[{ name: "(", className: "function_button" },
                { name: ")", className: "function_button" }],
                [{ name: "x!", className: "function_button"},
                { name: "x^2", className: "function_button"}],
                [{ name: "sin", className: "function_button"},
                 { name: "cos", className: "function_button"}],
                [{ name: "√", className: "function_button"},
                {name : "x^y", className: "function_button"}],
                [{ name: "log2", className: "function_button" },
                 { name: "log10", className: "function_button" }]];

    let idx = 0;
    for(let row of data)
    {
        for(let info of row) {
            let elem = document.createElement("td");
            let btn = document.createElement("button");

            btn.className = info.className;
            btn.innerHTML = info.name;
            elem.append(btn);
            tb.children[idx].prepend(elem);
        }
        idx++;
    }
    addHandlers();

    // change the displayer's size
    document.getElementById("calculator_display").style.width = "60rem";
}