// Get the input and output elements
const inputNumber = document.getElementById('inputNumber')
const outputText = document.getElementById('outputText')

// Add an event listener to the input element
inputNumber.addEventListener('input', function () {
  // Get the value entered in the input field
  const value = inputNumber.value

  // Initialize the output text
  let monthText = ''

  // Use a switch statement to match the entered value with the corresponding month
  switch (parseInt(value)) {
    case 1:
      monthText = 'January'
      break
    case 2:
      monthText = 'February'
      break
    case 3:
      monthText = 'March'
      break
    case 4:
      monthText = 'April'
      break
    case 5:
      monthText = 'May'
      break
    case 6:
      monthText = 'June'
      break
    case 7:
      monthText = 'July'
      break
    case 8:
      monthText = 'August'
      break
    case 9:
      monthText = 'September'
      break
    case 10:
      monthText = 'October'
      break
    case 11:
      monthText = 'November'
      break
    case 12:
      monthText = 'December'
      break
    default:
      monthText = ''
      break
  }

  // Update the value of the output field
  outputText.value = monthText
})

//----------------------------------------------------------->

/*
Using Array Method

// Get the input and output elements
const inputNumber = document.getElementById('inputNumber');
const outputText = document.getElementById('outputText');

// Add an event listener to the input element
inputNumber.addEventListener('input', function() {
// Get the value entered in the input field
const value = inputNumber.value;

// Array of month names
const months = [
'January', 'February', 'March', 'April',
'May', 'June', 'July', 'August',
'September', 'October', 'November', 'December'
];

// Perform validation to ensure the entered value is between 1 and 12
if (value >= 1 && value <= 12) { // Update the value of the output field with the corresponding month
      outputText.value=months[value - 1]; } else { // Clear the output field if the input is not within the valid range
      outputText.value='' ; } });

*/
