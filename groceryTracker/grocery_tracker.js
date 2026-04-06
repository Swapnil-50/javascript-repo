// Function with parameters
function groceryTracker(amount1, amount2, amount3) {
  return amount1 + amount2 + amount3;
}

// Function called on button click
function calculateTotal() {
  let g1 = parseFloat(document.getElementById('grocery1').value) || 0;
  let g2 = parseFloat(document.getElementById('grocery2').value) || 0;
  let g3 = parseFloat(document.getElementById('grocery3').value) || 0;

  let total = groceryTracker(g1, g2, g3);

  document.getElementById('result').innerText =
    `Total Expenditure of groceries is: ${total}`;
}