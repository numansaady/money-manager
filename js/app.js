// Get input value
function getInputValue(item) {
  const inputValue = document.getElementById(item + "-value");
  const amount = parseInt(inputValue.value);
  inputValue.value = "";
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

// Get Saving Amount and Remaining balance
function savingRemainBalance() {
  const incomeAmount = getInputValue("income");
  const savingPercent = getInputValue("percentage");
  const savingAmount = incomeAmount * (savingPercent / 100);
  const balanceAmount = updateBalance();
  const remainBalance = balanceAmount - savingAmount;
  const savingField = (document.getElementById("saving-amount").innerText =
    savingAmount);
  const remainBalanceField = (document.getElementById(
    "remain-balance"
  ).innerText = remainBalance);
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  updateBalance();
});
