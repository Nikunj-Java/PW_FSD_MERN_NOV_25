var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

var titleInput = document.getElementById("title");
var amountInput = document.getElementById("amount");
var typeInput = document.getElementById("type");
var monthInput = document.getElementById("month");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("list");
var filterMonth = document.getElementById("filterMonth");
var chart = document.getElementById("chart");

var totalIncome = document.getElementById("totalIncome");
var totalExpense = document.getElementById("totalExpense");
var totalBalance = document.getElementById("totalBalance");

var themeBtn = document.getElementById("themeBtn");

addBtn.onclick = function() {
  if (titleInput.value === "" || amountInput.value === "" || monthInput.value === "") {
    alert("Please fill all fields");
    return;
  }

  var transaction = {
    title: titleInput.value,
    amount: parseFloat(amountInput.value),
    type: typeInput.value,
    month: monthInput.value
  };

  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  render();
};

filterMonth.onchange = function() {
  render();
};

themeBtn.onclick = function() {
  document.body.classList.toggle("dark");
};

function render() {

  list.innerHTML = "";
  chart.innerHTML = "";

  var selectedMonth = filterMonth.value;
  var filtered = transactions;

  if (selectedMonth !== "") {
    filtered = transactions.filter(function(t) {
      return t.month === selectedMonth;
    });
  }

  var income = 0;
  var expense = 0;

  for (var i = 0; i < filtered.length; i++) {

    var t = filtered[i];

    var li = document.createElement("li");
    li.innerHTML = t.title + " - ₹" + t.amount;
    list.appendChild(li);

    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  }

  totalIncome.innerText = income;
  totalExpense.innerText = expense;
  totalBalance.innerText = income - expense;

  drawChart(income, expense);
}

function drawChart(income, expense) {

  var maxValue = Math.max(income, expense);

  if (maxValue === 0) {
    return;
  }

  var incomeHeight = (income / maxValue) * 200;
  var expenseHeight = (expense / maxValue) * 200;

  var incomeBar = document.createElement("div");
  incomeBar.className = "bar incomeBar";
  incomeBar.style.height = incomeHeight + "px";
  incomeBar.innerText = "Income";

  var expenseBar = document.createElement("div");
  expenseBar.className = "bar expenseBar";
  expenseBar.style.height = expenseHeight + "px";
  expenseBar.innerText = "Expense";

  chart.appendChild(incomeBar);
  chart.appendChild(expenseBar);
}

render();