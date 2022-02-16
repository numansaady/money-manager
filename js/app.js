// Get input value
function getInputValue(item) {
  const inputValue = document.getElementById(item + "-value");
  const amount = parseInt(inputValue.value);
  return amount;
}

// Get total expense amount
function expenseTotal() {
  const foodValue = getInputValue("food");
  const rentValue = getInputValue("rent");
  const clothValue = getInputValue("cloth");
  const expenseAmount = foodValue + rentValue + clothValue;
  return expenseAmount;
}

document
  .getElementById("calculate-btn")
  .addEventListener("click", function () {});
