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

// Get update total expense and balance
function updateBalance() {
  const incomeAmount = getInputValue("income");
  const expenseAmount = expenseTotal();
  const balanceAmount = incomeAmount - expenseAmount;
  const totalExp = (document.getElementById("total-expense").innerText =
    expenseAmount);
  const balance = (document.getElementById("balance").innerText =
    balanceAmount);
  return balanceAmount;
}

document
  .getElementById("calculate-btn")
  .addEventListener("click", function () {});
