const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const monthInput = document.getElementById("month");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const filterMonth = document.getElementById("filterMonth");
const chart = document.getElementById("chart");

const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

const themeToggle = document.getElementById("themeToggle");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

addBtn.onclick = () => {
  if (!titleInput.value || !amountInput.value || !monthInput.value) return;

  transactions.push({
    title: titleInput.value,
    amount: +amountInput.value,
    type: typeSelect.value,
    month: monthInput.value
  });

  saveAndRender();
};

filterMonth.onchange = render;

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

function saveAndRender() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
  render();
}

function render() {
  list.innerHTML = "";
  chart.innerHTML = "";

  const month = filterMonth.value;
  const filtered = month
    ? transactions.filter(t => t.month === month)
    : transactions;

  let income = 0, expense = 0;

  filtered.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `${t.title} <strong>${t.type === "income" ? "+" : "-"}₹${t.amount}</strong>`;
    list.appendChild(li);

    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  incomeEl.textContent = income;
  expenseEl.textContent = expense;
  balanceEl.textContent = income - expense;

  drawBar("Income", income, "income");
  drawBar("Expense", expense, "expense");
  console.log("Filtered data:", filtered);
}

function drawBar(label, value, type) {
  const bar = document.createElement("div");
  bar.className = "bar " + type;

  // Minimum visible height
  const height = value > 0 ? Math.max(value / 5, 20) : 0;

  bar.style.height = height + "px";
  bar.innerHTML = `
    <small>${label}</small><br>
    ₹${value}
  `;

  chart.appendChild(bar);
}
render();