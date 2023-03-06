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
            
        }

        if (button.classList.contains('clear'))
        {
            // clearScreen();
            console.log(numbersClicked);
        }

        if (button.classList.contains('add'))
            operator = '+';
        
        if (button.classList.contains('subtract'))
            operator = '-';

        if (button.classList.contains('multiply'))
            operator = '*';

        if (button.classList.contains('divide'))
        {
            operator = '/';
            // numbersDisplay.innerHTML = `${numbersDisplay.innerHTML} ${operator}`; 
            // console.log(operator);
            // appendNumbers();
            // clearScreen();
        }

        if (button.classList.contains('enter'))
        {
            // appendNumbers();
            // showAll();
            
            
            // clearScreen();
        }



    });
    // console.log(operator);
});


function appendNumbers()
{
    
    // if (numbersClicked.length === 2)
    //     numbersClicked.push(second);


    // if (operator !== undefined)
    // {
    //     numbersClicked.push(first);
    //     first = undefined;
    //     numbersClicked.push(operator);
    // }
    // console.log(numbersClicked.length);
    
    
    

    // // console.log(numbersClicked);
    // if (numbersClicked.length === 3)
    //     console.log("Full");

    // console.table(numbersClicked);
}

function clearScreen()
{
    // numbersDisplay.innerHTML = '';  
    // second = '';
    // while(numbersClicked.length > 0)
    //     numbersClicked.pop();

    
}


function showAll()
{
    // numbersDisplay.innerHTML = `${first} ${operator} ${second} = `;
    // console.log(`${numbersClicked[0]} ${numbersClicked[1]} ${numbersClicked[2]} = ${operate(numbersClicked[1], numbersClicked[0], numbersClicked[2])}`);
    // numbersDisplay.innerHTML = (operate(numbersClicked[1], Number(numbersClicked[0]), Number(numbersClicked[2])));
    // let result = numbersDisplay.innerHTML;
    // console.log(typeof(result));
}










