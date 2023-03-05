function add(first, second)
{
    return first + second;
}

function subtract(first, second)
{
    return first - second;
}

function multiply(first, second)
{
    return first * second;
}

function divide(first, second)
{
    return first / second;
}

function operate(operator, first, second)
{
    if (operator === '+')
        return add(first, second);

    if (operator === '-')
        return subtract(first, second);

    if (operator === '*')
        return multiply(first, second);

    if (operator === '/')
        return divide(first, second);
    
}





