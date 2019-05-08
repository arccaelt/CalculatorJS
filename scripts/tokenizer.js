"use strict";

function isOperand(value, operands)
{
    return operands.includes(value);
}

function isOperator(token, operators)
{
    for(let op of operators)
        if (token == op || op.includes(token) || op.startsWith(token))
            return true;
    return false;
}

function matchOperator(token, operators)
{
    for (let op of operators)
        if (token == op || op.includes(token) || op.startsWith(token))
            return op;
}

function tokenize(expr, operands, operatorsInfo)
{
    let tokens = [];
    let currentOperand = "";

    for(let i = 0; i < expr.length; i++) {
        if(isOperand(expr[i], operands)) {
            currentOperand += expr[i];
        }
        else if (isOperator(expr[i], Object.keys(operatorsInfo))) {
            if (currentOperand)
                tokens.push(new GetToken(Number(currentOperand), false));

            let parsed = "";
            let c = i;
            let fullName = matchOperator(expr[i], Object.keys(operatorsInfo));
            while (c < expr.length && parsed != fullName) {
                parsed += expr[c++];
            }

            tokens.push(new GetToken(fullName, true, operatorsInfo[fullName].priority, 
                        operatorsInfo[fullName].ariaty));
            i = c - 1;
            currentOperand = "";
        }
        else {
            console.log(`unkown char ${expr[i]}`);
        }
    }

    if (currentOperand)
        tokens.push(new GetToken(Number(currentOperand), false));

    return tokens;
}