"use strict";

let basicCalculator = {
    _supportedOperators:
    {
        "+": { priority: 1, ariaty: 2 },
        "-": { priority: 2, ariaty: 2 },
        "*": { priority: 3, ariaty: 2 },
        "/": { priority: 4, ariaty: 2 },
    },

    evalOperator(operator, a, b) {
        let value;
        switch (operator) {
            case "+":
                value = a + b;
                break;
            case "-":
                value = a - b;
                break;
            case "*":
                value = a * b;
                break;
            case "/":
                if(b == 0)
                {
                    alert("Divide by zero is impossible");
                    return NaN;
                }

                value = a / b;
                break;
        }
        return value;
    },

    __proto__ : calculator,
};