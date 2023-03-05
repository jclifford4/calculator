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

let operator, first = '', second = '';
let numbersClicked = [];
let operatorsClicked = [];

buttons.forEach(button => {
    button.addEventListener('click', () => {

        

        if (button.classList.contains('number'))
        {
            numbersDisplay.innerHTML = button.innerHTML;
            if (first !== undefined)
            {
                first = first + `${numbersDisplay.innerHTML}`;
                numbersDisplay.innerHTML = first;
            }
            else
            {

                second = second + `${numbersDisplay.innerHTML}`;
                numbersDisplay.innerHTML = second;
            }
        }

        if (button.classList.contains('clear'))
            numbersDisplay.innerHTML = '';

        if (button.classList.contains('add'))
            operator = '+';
        
        if (button.classList.contains('subtract'))
            operator = '-';

        if (button.classList.contains('multiply'))
            operator = '*';

        if (button.classList.contains('divide'))
        {
            operator = '/';
            // console.log(operator);
            appendNumbers();
            
            clearScreen();
        }

        if (button.classList.contains('enter'))
        {
            appendNumbers();
            showAll();
            
            clearScreen();
        }

        // if (operator !== undefined && first !== undefined && second !== undefined)
        // {
        //     let result = operate(operator, first, second);
        //     console.log(result);

        // }

        // logNumbers();


    });
    // console.log(operator);
});


function appendNumbers()
{
    
    if (numbersClicked.length === 2)
        numbersClicked.push(second);


    if (operator !== undefined)
    {
        numbersClicked.push(first);
        first = undefined;
        numbersClicked.push(operator);
    }
    console.log(numbersClicked.length);
    
    
    

    // console.log(numbersClicked);
    if (numbersClicked.length === 3)
        console.log("Full");

    console.table(numbersClicked);
}

function clearScreen()
{
    numbersDisplay.innerHTML = ''
}


function showAll()
{
    // numbersDisplay.innerHTML = `${first} ${operator} ${second} = `;
    console.log(`${numbersClicked[0]} ${numbersClicked[1]} ${numbersClicked[2]} = ${operate(numbersClicked[1], numbersClicked[0], numbersClicked[2])}`);
    let result = numbersDisplay.innerHTML = operate(numbersClicked[1], numbersClicked[0], numbersClicked[2]);
    console.log(result);
}










