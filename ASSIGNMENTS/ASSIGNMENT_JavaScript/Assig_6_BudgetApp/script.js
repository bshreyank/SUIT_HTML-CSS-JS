// function displayNumber() {
//       var inputNumber = document.getElementById("numberInput").value;
//       var tableData = document.getElementById("numberCell");
      
//       tableData.innerText = inputNumber;
//     }

var balance = 0;
    var transactionCount = 1;
    
    function updateBalance() {
      var creditAmount = parseFloat(document.getElementById("creditInput").value);
      var debitAmount = parseFloat(document.getElementById("debitInput").value);
      
      if (!isNaN(creditAmount)) {
        balance += creditAmount;
      }
      
      if (!isNaN(debitAmount)) {
        balance -= debitAmount;
      }
      
      document.getElementById("balanceInput").value = balance.toFixed(2);
      
      addTransactionToHistory(creditAmount, debitAmount, balance.toFixed(2));
    }
    
    function addTransactionToHistory(creditAmount, debitAmount, balance) {
      var table = document.getElementById("historyTable");
      var row = table.insertRow(1);
      var srNoCell = row.insertCell(0);
      var creditCell = row.insertCell(1);
      var debitCell = row.insertCell(2);
      var balanceCell = row.insertCell(3);
      
      srNoCell.textContent = transactionCount++;
      creditCell.textContent = creditAmount.toFixed(2);
      debitCell.textContent = debitAmount.toFixed(2);
      balanceCell.textContent = balance;
    }