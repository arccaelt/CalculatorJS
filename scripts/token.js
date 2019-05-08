"use strict"

function GetToken(data, isOperator, priority = 0, ariaty = 0)
{
    this.data = data;
    this.isOperator = isOperator;
    this.priority = priority;
    this.ariaty = ariaty;
}

GetToken.prototype.toString = function() {
    return `Token(data = ${this.data})`;
}

GetToken.prototype.valueOf = function() {
    return this.data;
}