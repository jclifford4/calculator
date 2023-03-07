// Query the main componenets
const numbersDisplay = document.querySelector('.numbers');

const buttons = document.querySelectorAll('.button');

// Data
let operator, displayValue = '';
let numbers = [];
let operators = [];
let currentNum;
let currentNumString = '';

// Add method
function add(first, second)
{
    return first + second;
}

// Subtract method
function subtract(first, second)
{
    return first - second;
}

// Multiply method
function multiply(first, second)
{
    return first * second;
}

// Divide method
function divide(first, second)
{
    return first / second;
}

// Modulo mehtod
function modulo(first, second)
{
    return first % second;
}

// Calculate result based on two numbers and an operator
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

    if (operator === '%')
        return modulo(first, second);
    
}

// Display the calculation in the display
function displayResult(value)
{
    numbersDisplay.innerHTML += `${value}`;
}

// Append number to display
function addNumberToDisplay(button)
{
    numbersDisplay.innerHTML += `${button.innerHTML}`;
    currentNumString += `${button.innerHTML}`;
    displayValue = numbersDisplay.innerHTML;
}

// Append operator to display
function addOperatorToDisplay(operator)
{
    numbersDisplay.innerHTML += ' ' + operator + ' ';
}

// Strings calculations together
function addNumberToDisplaySequence(currNum)
{
    numbers[0] =  operate(operator, numbers[0], currNum);
    numbersDisplay.innerHTML += `${currNum}`;
    displayValue = numbers[0];

    while(numbers.length >1 )
        numbers.pop();
    operators.pop();
}

function calculate(operator)
{
    appendNumber(Number(displayValue));
    appendOperator(operator);
    addOperatorToDisplay(operator);
    
    if (numbers.length > 1)
        numbers.pop();
    currentNumString = '';
}

// Push to number container
function appendNumber(number)
{
    numbers.push(number);    
}

// Push to operator container
function appendOperator(operator)
{
    operators.push(operator);
}

// Wipe the display and data
function clearDisplay()
{
    numbersDisplay.innerHTML = '';  
    displayValue = '';
    currentNum = undefined;
    currentNumString = '';
    
}

// Wipe the containers clean
function clearContainers()
{
    while(numbers.length !== 0)
        numbers.pop();

    while(operators.length !== 0)
        operators.pop();
}

// Listener for clicks on buttons.
buttons.forEach(button => {
    button.addEventListener('click', () => {

        
        
        // Append number to display
        if (button.classList.contains('number'))
        {
            if (numbersDisplay.innerHTML === "0")
            {
                clearDisplay();
            }
            
            if (operator !== undefined)
            {   
                currentNum = Number(button.innerHTML);
                currentNumString += `${currentNum}`;
                numbersDisplay.innerHTML += `${currentNum}`;
            }
            else
            {
                addNumberToDisplay(button);
            }

            
        }

        // Clear display and stored data
        if (button.classList.contains('clear'))
        {
            clearDisplay();
            clearContainers();
            numbersDisplay.innerHTML = '';
            operator = undefined;
        }

        if (button.classList.contains('delete'))
        {
            if (operators.length >= 1)
            {
                numbersDisplay.innerHTML = numbersDisplay.innerHTML.slice(0, numbersDisplay.innerHTML.length - 3);
                operators.pop();
            }
            else 
            {
                numbersDisplay.innerHTML = numbersDisplay.innerHTML.slice(0, numbersDisplay.innerHTML.length - 1);
                displayValue = currentNumString = numbersDisplay.innerHTML;
                
            }

            if (numbersDisplay.innerHTML === '' && numbers.length >= 1)
            {
                numbers.pop();
                numbersDisplay.innerHTML = 'ERROR';
            }

        }

        // Math functions on click
        if (displayValue != '')
        {

            if (button.classList.contains('add'))
            {
                operator = '+';
                calculate(operator);
            }
            
            if (button.classList.contains('subtract'))
            {
                operator = '-';
                calculate(operator);  
            }
    
            if (button.classList.contains('multiply'))
            {
                operator = '*';
                calculate(operator);   
            }
    
            if (button.classList.contains('divide'))
            {
                operator = '/';
                calculate(operator);
            }

            if (button.classList.contains('modulo'))
            {
                operator = '%';
                calculate(operator);
            }
        }

        // Result on click
        if (button.classList.contains('enter'))
        {
            
            if (numbers.length < 1 || numbers.length > 1 || currentNum === undefined)
                numbersDisplay.innerHTML = 'ERROR';
            else if (numbers.length >= 1)
            {
                appendNumber(Number(currentNumString));
                addNumberToDisplaySequence(Number(currentNumString));
                
                displayValue = numbers[0];

                if (displayValue % 1 !== 0)
                    numbersDisplay.innerHTML = `${displayValue.toFixed(6)}`;
                else
                    numbersDisplay.innerHTML = `${displayValue}`;
            }
        }
    });
});












