//get the elements by id and store in vaiable
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
//localstorage
let transaction= JSON.parse(localStorage.getItem("transaction")) || [];
//apply onclick method to addBtn
addBtn.onclick=()=>{
    if(!titleInput.value || !amountInput.value ||!monthInput.value) return;
    transaction.push({
        title: titleInput.value,
        amount: +amountInput.value,
        type: typeSelect.value,
        month: monthInput.value
    });

   saveAndRender();
}

function saveAndRender(){
     localStorage.setItem("transaction",JSON.stringify(transaction));
     list.innerHTML="";
     chart.innerHTML="";
}