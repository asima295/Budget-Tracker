let budgetData = {};

function addCategory() {
    let category = document.getElementById("category").value;
    let budget = parseFloat(document.getElementById("budget").value);

    if (category && budget > 0) {
        budgetData[category] = { limit: budget, spent: 0 };
        renderCategories();
    }
}

function addExpense(category) {
    let amount = parseFloat(prompt("Enter expense amount:"));
    if (!amount || amount <= 0) return;

    budgetData[category].spent += amount;
    renderCategories();
}

function renderCategories() {
    let categoriesDiv = document.getElementById("categories");
    categoriesDiv.innerHTML = "";

    for (let category in budgetData) {
        let data = budgetData[category];
        let warning = data.spent >= data.limit ? "warning" : "";

        categoriesDiv.innerHTML += `
            <div class='category'>
                <strong>${category}:</strong> Spent $${data.spent} / $${data.limit} 
                <button onclick="addExpense('${category}')">Add Expense</button>
                <span class="${warning}">${data.spent >= data.limit ? '⚠ Budget Exceeded!' : ''}</span>
            </div>
`;
    }
}