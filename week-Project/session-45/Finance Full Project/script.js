var transactions = JSON.parse(localStorage.getItem("transactions")) || [];
var editIndex = -1;

var titleInput = document.getElementById("title");
var amountInput = document.getElementById("amount");
var typeInput = document.getElementById("type");
var categoryInput = document.getElementById("category");
var monthInput = document.getElementById("month");
var addBtn = document.getElementById("addBtn");

var filterMonth = document.getElementById("filterMonth");
var searchInput = document.getElementById("search");

var list = document.getElementById("list");
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
    category: categoryInput.value,
    month: monthInput.value
  };

  if (editIndex === -1) {
    transactions.push(transaction);
  } else {
    transactions[editIndex] = transaction;
    editIndex = -1;
    addBtn.innerText = "Add";
  }

  localStorage.setItem("transactions", JSON.stringify(transactions));
  clearForm();
  render();
};

filterMonth.onchange = render;
searchInput.onkeyup = render;

themeBtn.onclick = function() {
  document.body.classList.toggle("dark");
};

function clearForm() {
  titleInput.value = "";
  amountInput.value = "";
  monthInput.value = "";
}

function render() {

  list.innerHTML = "";
  chart.innerHTML = "";

  var selectedMonth = filterMonth.value;
  var searchText = searchInput.value.toLowerCase();

  var filtered = transactions.filter(function(t) {

    var monthMatch = selectedMonth === "" || t.month === selectedMonth;
    var searchMatch = t.title.toLowerCase().indexOf(searchText) !== -1;

    return monthMatch && searchMatch;
  });

  var income = 0;
  var expense = 0;

  for (var i = 0; i < filtered.length; i++) {

    var t = filtered[i];

    var li = document.createElement("li");

    li.innerHTML =
      "<span>" +
      t.title + " (" + t.category + ") - ₹" + t.amount +
      "</span>" +
      "<div class='actions'>" +
      "<button onclick='editTransaction(" + i + ")'>Edit</button>" +
      "<button onclick='deleteTransaction(" + i + ")'>Delete</button>" +
      "</div>";

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

  if (maxValue === 0) return;

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

function deleteTransaction(index) {
  transactions.splice(index, 1);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  render();
}

function editTransaction(index) {
  var t = transactions[index];

  titleInput.value = t.title;
  amountInput.value = t.amount;
  typeInput.value = t.type;
  categoryInput.value = t.category;
  monthInput.value = t.month;

  editIndex = index;
  addBtn.innerText = "Update";
}

function exportCSV() {

  var csv = "Title,Amount,Type,Category,Month\n";

  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    csv += t.title + "," + t.amount + "," + t.type + "," + t.category + "," + t.month + "\n";
  }

  var blob = new Blob([csv], { type: "text/csv" });
  var url = URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();
}

render();