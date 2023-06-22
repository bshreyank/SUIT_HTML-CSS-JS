let themeToggle = document.getElementById('theme-toggle');
let result = document.getElementById('result');

function toggleTheme() {
  if (themeToggle.checked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

function clearResult() {
  result.value = '';
}

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
