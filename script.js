const changeTheme = document.getElementById("theme");
const mainContainer = document.querySelector(".main-container");
const display = document.querySelector("p");
const digits = document.querySelectorAll(".digits");
const clearScreen = document.getElementById("del");
const operate = document.getElementById("equal");

// Variables
let displayvalue = "";
let numberOne = null;
let numberTwo = null;
let operator = null;
let result = null;
// Function to change themes.
changeTheme.addEventListener("click", () => {
  let isChanged = false;
  const mainBackground = [
    "hsl(0, 0%, 90%)",
    "hsl(268, 75%, 9%)",
    "hsl(222, 26%, 31%)",
  ];
  const randomBackground = Math.floor(Math.random() * mainBackground.length);

  if (isChanged === false) {
    mainContainer.style.backgroundColor = mainBackground[randomBackground];
    isChanged = true;
  } else {
    mainContainer.style.backgroundColor = "hsl(222, 26%, 31%)";
    isChanged = false;
  }
});

// Clear the display is the del key is clicked.

// Functions
const addNumbers = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

const subtractNumbers = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
};

const multiplyNumber = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

const divideNumber = (numberOne, numberTwo) => {
  return numberOne / numberTwo;
};

// Getting the display value.
digits.forEach((button) => {
  button.addEventListener("click", () => {
    displayvalue += button.value;
    console.log(displayvalue);
    display.textContent = displayvalue;
  });
});

// Resetting values
const clearDisplay = () => {
  clearScreen.addEventListener("click", () => {
    displayvalue = "";
    numberOne = null;
    numberTwo = null;
    operator = null;
    result = null;
    display.textContent = "";
  });
};

clearDisplay();

// handling the numbers and operators.
const operation = () => {
  const splitExpression = displayvalue.split(/[\*\-\+]/);
  const getoperator = displayvalue.match(/[\*\-\+]/);
  console.log(getoperator);
  console.log(splitExpression);

  if (
    splitExpression.length < 2 ||
    getoperator.length !== 1 ||
    splitExpression.length > 2
  ) {
    display.textContent = "Please enter a valid expression";
  } else {
    numberOne = parseFloat(splitExpression[0]);
    numberTwo = parseFloat(splitExpression[1]);

    if (result !== null) {
      numberOne = result;
    } else {
      numberOne = parseFloat(splitExpression[0]);
    }

    switch (getoperator[0]) {
      case "+":
        result = addNumbers(numberOne, numberTwo);
        display.textContent = `${result}`;
        displayvalue = `${result}`;
        break;

      case "-":
        result = subtractNumbers(numberOne, numberTwo);
        display.textContent = `${result}`;
        displayvalue = `${result}`;
        break;

      case "*":
        result = multiplyNumber(numberOne, numberTwo);
        display.textContent = `${result}`;
        displayvalue = `${result}`;
        break;

      case "/":
        result = divideNumber(numberOne, numberTwo);
        if (numberOne === 0 || numberTwo === 0) {
          display.textContent = "Cannot divide by 0";
          return;
        }

        display.textContent = `${result}`;
        displayvalue = `${result}`;
        break;

      default:
        break;
    }
  }

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    display.textContent = `Please enter only one number. Before an operator and after an operator`;
  }
};

operate.addEventListener("click", operation);
