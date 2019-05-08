"use strict";

let calculator = {
    _supportedOperand: "0123456789",

    constructRPN(expr)
    {
        // construct RPN(reverse polish notation) for an expression
        let stack = [];
        let rpn = [];

        let tokens = tokenize(expr, this._supportedOperand, this._supportedOperators);

        for(let token of tokens)
        {
            // TODO: Support parenthesis
            if(token.isOperator)
            {
                let op_priority = token.priority;
                while(stack.length && stack[stack.length - 1].priority >= op_priority)
                {
                    rpn.push(stack.pop());
                }
                stack.push(token);
            }
            else
            {
                rpn.push(token);
            }
        }

        while(stack.length)
            rpn.push(stack.pop());

        console.log(rpn);

        return rpn;
    },

    evalExpression(expr)
    {
        let stack = [];
        let rpn = this.constructRPN(expr);
        let value = 0;

        for(let token of rpn)
        {
            if(!token.isOperator)
            {
                stack.push(token);
            }
            else
            {
                if(token.ariaty == 2)
                {
                    let a = stack.pop();
                    let b = stack.pop();

                    if(a == undefined || b == undefined)
                    {
                        alert("Invalid expression");
                        return -Infinity;
                    }
                    
                    value = this.evalOperator(token.data, b, a);
                }
                else
                    value = this.evalOperator(token.data, stack.pop());
                stack.push(value);
            }
        }

        if(stack.length != 1)
        {
            alert("Invalid expression");
            return -Infinity;
        }

        return stack[0];
    },
};

Object.freeze(calculator);