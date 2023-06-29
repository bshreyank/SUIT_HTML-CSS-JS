/* Calculating Answer */
function add() {
  var num1 = parseFloat(document.getElementById('num1').value)
  var num2 = parseFloat(document.getElementById('num2').value)
  var result = num1 + num2
  document.getElementById('answers').value = result

  var operation = document.getElementById('add').textContent;
      document.getElementById('operations').value = operation;
}

function sub() {
      var num1 = parseFloat(document.getElementById('num1').value)
      var num2 = parseFloat(document.getElementById('num2').value)
      var result = num1 - num2
      document.getElementById('answers').value = result

      var operation = document.getElementById('sub').textContent;
      document.getElementById('operations').value = operation;
}

function mul() {
      var num1 = parseFloat(document.getElementById('num1').value)
      var num2 = parseFloat(document.getElementById('num2').value)
      var result = num1 * num2
      document.getElementById('answers').value = result

      var operation = document.getElementById('mul').textContent;
      document.getElementById('operations').value = operation;
}

function div() {
      var num1 = parseFloat(document.getElementById('num1').value)
      var num2 = parseFloat(document.getElementById('num2').value)
      var result = num1 / num2
      document.getElementById('answers').value = result

      var operation = document.getElementById('div').textContent;
      document.getElementById('operations').value = operation;
}

function mod() {
      var num1 = parseFloat(document.getElementById('num1').value)
      var num2 = parseFloat(document.getElementById('num2').value)
      var result = num1 % num2
      document.getElementById('answers').value = result

      var operation = document.getElementById('mod').textContent;
      document.getElementById('operations').value = operation;
    
}
