"use strict";

let advancedCalculator = {
    _supportedOperators: 
        {"+" : {priority : 1, ariaty : 2},
        "-" : { priority: 2, ariaty: 2 },
        "*": { priority: 3, ariaty: 2 },
        "/": { priority: 4, ariaty: 2 },
        "^": { priority: 5, ariaty: 2 },
        "sin": { priority: 6, ariaty: 1 },
        "cos": { priority: 7, ariaty: 1 },
        "!": { priority: 8, ariaty: 1 },
        "log2": { priority: 9, ariaty: 1 },
        "Log10": { priority: 10, ariaty: 1 },
        "√": { priority: 11, ariaty: 1 }},

    _getFactorial(n)
    {
        // TODO: Add bound checking(don't let the user insert large numbers)
        let r = 1;
        for(let i = 1; i <= n; i++)
            r *= i;
        return r;
    },

    evalOperator(operator, a, b) {
        let parentValue = this.__proto__.evalOperator(operator, a, b);
        if (parentValue != undefined)
            return parentValue;
        console.log(operator);
        let value = 0;
        switch (operator) {
            case "^":
                value = a ** b;
                break;
            case "!":
                value = this._getFactorial(a); // here b will be undefined
                break;
            case "√":
                value = Math.sqrt(a); // b is undefined as well
                break;
            case "sin":
                value = Math.sin(a);
                break;
            case "cos":
                value = Math.cos(a);
                break;
            case "Log10":
                value = Math.log10(a);
                break;
            case "log2":
                value = Math.log2(a);
                break;
        }
        return value;
    },

    __proto__: basicCalculator,
};