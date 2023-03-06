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

const numbersDisplay = document.querySelector('.numbers');
console.log(numbersDisplay);

const buttons = document.querySelectorAll('.button');
console.log(buttons);

let operator, displayValue = '';
let numbers = [];
let operators = [];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        // Append number to display
        if (button.classList.contains('number'))
        {
            addNumberToDisplay(button);
            numbersDisplay.innerHTML = displayValue;
        }

        // Clear display and stored data
        if (button.classList.contains('clear'))
        {
            clearDisplay();
            clearContainers();
            numbersDisplay.innerHTML = '0';
        }

        if (displayValue != '')
        {

            if (button.classList.contains('add'))
            {
                operator = '+';
                appendNumber(Number(displayValue));
                appendOperator(operator);
                addOperatorToDisplay(operator);
                clearDisplay();
                console.log(numbers);
                console.log(operators); 
                
            }
            
            if (button.classList.contains('subtract'))
            {
                operator = '-';
                appendNumber(Number(displayValue));
                appendOperator(operator);
                addOperatorToDisplay(operator);
                clearDisplay();
                console.log(numbers);
                console.log(operators); 
            }
    
            if (button.classList.contains('multiply'))
            {
                operator = '*';
                appendNumber(Number(displayValue));
                appendOperator(operator);
                addOperatorToDisplay(operator);
                clearDisplay();
                console.log(numbers);
                console.log(operators); 
            }
    
            if (button.classList.contains('divide'))
            {
                operator = '/';
                appendNumber(Number(displayValue));
                appendOperator(operator);
                addOperatorToDisplay(operator);
                clearDisplay();
                console.log(numbers);
                console.log(operators); 
            }
        }

        if (button.classList.contains('enter'))
        {
            if (numbers.length < 1 && operators < 1)
                numbersDisplay.innerHTML = 'ERROR';
            else if (numbers.length >= 1)
            {

                operators.reverse();
                numbers.push(Number(numbersDisplay.innerHTML));
                numbers[0] = operate(operators[0], numbers[0], numbers.pop());
                displayResult(numbers[0]);
                displayValue = numbers[0];
            }
           
        }

    });
   
});

function displayResult(value)
{
    clearDisplay();
    numbersDisplay.innerHTML += `${value}`;
}

function addNumberToDisplay(button)
{
    displayValue = displayValue + `${button.innerHTML}`;
    console.log(displayValue);
}

function addOperatorToDisplay(operator)
{
    numbersDisplay.innerHTML += ' ' + operator;
    
}


function appendNumber(number)
{
    numbers.push(number);    
}

function appendOperator(operator)
{
    operators.push(operator);
}

function clearDisplay()
{
    numbersDisplay.innerHTML = '';  
    displayValue = '';
    operator = undefined;
}

function clearContainers()
{
    while(numbers.length !== 0)
        numbers.pop();

    while(operators.length !== 0)
        operators.pop();
}

function showAll()
{
    // numbersDisplay.innerHTML = `${first} ${operator} ${second} = `;
    // console.log(`${numbersClicked[0]} ${numbersClicked[1]} ${numbersClicked[2]} = ${operate(numbersClicked[1], numbersClicked[0], numbersClicked[2])}`);
    // numbersDisplay.innerHTML = (operate(numbersClicked[1], Number(numbersClicked[0]), Number(numbersClicked[2])));
    // let result = numbersDisplay.innerHTML;
    // console.log(typeof(result));
}










