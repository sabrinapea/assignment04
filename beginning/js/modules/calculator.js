// ADD A PRIVATE FUNCTION CALLED CALCULATE
let calculate = 'The result of the calculation is:';

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
export const add = (x, y) => {
    let result = x + y;
    return `${calculate} ${result}`;
};

// SUBTRACT FUNCTION
export const substract = (x, y) => {
    let result = x - y;
    return `${calculate} ${result}`;
};

// MULTIPLY FUNCTION
export const multiply = (x, y) => {
    let result= x * y;
    return `${calculate} ${result}`;
};

// DIVIDE FUNCTION
export const divide = (x, y) => {
    let result = x / y;
    return `${calculate} ${result}`;
};

// EXPORT THE FOUR PUBLIC FUNCTIONS