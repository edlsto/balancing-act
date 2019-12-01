//Adds an event listener to close button on welcome box
var btn = document.getElementById('closebtn');
btn.addEventListener('click', closeBox);

//Gets nav bar icon buttons from DOM
var dashboardIcon = document.querySelector('.dashboard-icon');
var transactionsIcon = document.querySelector('.transactions-icon');
var profileIcon = document.querySelector('.profile-icon');

//Gets main content from DOM
var pageContent = document.querySelector("main");

//Puts event listener on dashboard icon
dashboardIcon.addEventListener('click', function(){
  transactionsIcon.classList.remove('active');
  profileIcon.classList.remove('active');
  dashboardIcon.classList.add('active');
  addDashboardHTML();
});

//Puts event listener on transaction icon
transactionsIcon.addEventListener('click', function(){
  dashboardIcon.classList.remove('active');
  profileIcon.classList.remove('active');
  transactionsIcon.classList.add('active');
  addTransactionsHTML();
});

//Puts event listener on profile icon
profileIcon.addEventListener('click', function(){
  dashboardIcon.classList.remove('active');
  transactionsIcon.classList.remove('active');
  profileIcon.classList.add('active');
  clearContent();
});

//Makes welcome box disappear
function closeBox() {
  btn.parentElement.classList.add('transition');
  pageContent.classList.add("welcome-banner-closed");
};

// Clears out HTML
function clearContent() {
  pageContent.innerHTML = ""
};

//Adds back the dashboard HTML
function addDashboardHTML() {
  if (pageContent.classList.contains("welcome-banner-closed")) {
    pageContent.innerHTML = '<section class="balancing-act"><h1>Balancing Act</h1> </section><div class="column-left"><section class="account-summary"><div class="account box"><p class="label">Income</p><h3 class="account-total">$2,119.12</h3></div><div class="account box"><p class="label">Expenses</p><h3 class="account-total">$420.54</h3></div><div class="account box"><p class="label">Credit score</p><h3 class="account-total">673</h3></div> </section> <section class="account-list"><div class="title-button-row"><h2 class="section-header">Accounts</h2> <button>Manage accounts</button></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Checking</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/savings.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Savings</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Amazon Credit</div><div class="type-item">Credit Card</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Southwest Credit</div><div class="type-item">Credit Card</div></div> </section></div><div class="column-right"> <section class="transactions-box box"><div class="title-button-row"><h2 class="section-header">Recent Transactions</h2> <button>New transaction</button></div><table><thead><tr><th class="transaction">Date</th><th class="payee">Payee</th><th class="inflow">Inflow</th><th class="outflow">Outflow</th></tr></thead><tr><td class="transaction">Oct. 25, 2019</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">Oct. 24, 2019</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">Oct. 22, 2019</td><td class="payee">Paycheck</td><td class="inflow">$1,319.12</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 21, 2019</td><td class="payee">Trader Joe\'s</td><td class="inflow">-</td><td class="outflow">$54.92</td></tr><tr><td class="transaction">Oct. 20, 2019</td><td class="payee">Shell</td><td class="inflow">-</td><td class="outflow">$46.23</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Rent</td><td class="inflow">$800.00</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Hapa Sushi</td><td class="inflow">-</td><td class="outflow">$13.97</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">Pig Train</td><td class="inflow">-</td><td class="outflow">$4.83</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">RTD</td><td class="inflow">-</td><td class="outflow">$6.00</td></tr></table> </section></div>';
  } else {
    pageContent.innerHTML = '<section class="balancing-act"><h1>Balancing Act</h1> </section><div class="column-left"> <section class="welcome"><h3 class="welcome-message">Welcome, Oscar!</h3><img src="./assets/close.svg" id="closebtn"></section><section class="account-summary"><div class="account box"><p class="label">Income</p><h3 class="account-total">$2,119.12</h3></div><div class="account box"><p class="label">Expenses</p><h3 class="account-total">$420.54</h3></div><div class="account box"><p class="label">Credit score</p><h3 class="account-total">673</h3></div> </section> <section class="account-list"><div class="title-button-row"><h2 class="section-header">Accounts</h2> <button>Manage accounts</button></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Checking</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/savings.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Savings</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Amazon Credit</div><div class="type-item">Credit Card</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Southwest Credit</div><div class="type-item">Credit Card</div></div> </section></div><div class="column-right"> <section class="transactions-box box"><div class="title-button-row"><h2 class="section-header">Recent Transactions</h2> <button>New transaction</button></div><table><thead><tr><th class="transaction">Date</th><th class="payee">Payee</th><th class="inflow">Inflow</th><th class="outflow">Outflow</th></tr></thead><tr><td class="transaction">Oct. 25, 2019</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">Oct. 24, 2019</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">Oct. 22, 2019</td><td class="payee">Paycheck</td><td class="inflow">$1,319.12</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 21, 2019</td><td class="payee">Trader Joe\'s</td><td class="inflow">-</td><td class="outflow">$54.92</td></tr><tr><td class="transaction">Oct. 20, 2019</td><td class="payee">Shell</td><td class="inflow">-</td><td class="outflow">$46.23</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Rent</td><td class="inflow">$800.00</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Hapa Sushi</td><td class="inflow">-</td><td class="outflow">$13.97</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">Pig Train</td><td class="inflow">-</td><td class="outflow">$4.83</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">RTD</td><td class="inflow">-</td><td class="outflow">$6.00</td></tr></table> </section></div>';
    btn = document.getElementById('closebtn');
    btn.addEventListener('click', closeBox);
  }
};

// Adds the transactions HTML
function addTransactionsHTML() {
  pageContent.innerHTML = '<section class="transactions-page-header"><h1 class="section-header">Transactions</h1> <button class="transaction-button inactive">Outflow</button> <button class="transaction-button inactive">Inflow</button> <button class="transaction-button">All</button> </section><div class="column-accounts"> <section class="transactions-box box"><table class="transactions-page-table"><thead><tr><th class="transaction">Date</th><th class="account-table-cell">Account</th><th class="payee">Payee</th><th class="inflow">Inflow</th><th class="outflow">Outflow</th></tr></thead><tr><td class="transaction">10-25-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-22-19</td><td class="account-table-cell">Checking</td><td class="payee">Paycheck</td><td class="inflow">$1319.12</td><td class="outflow">-</td></tr><tr><td class="transaction">10-21-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Trader Joe\'s</td><td class="inflow">-</td><td class="outflow">$54.92</td></tr><tr><td class="transaction">10-20-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Shell</td><td class="inflow">-</td><td class="outflow">$46.23</td></tr><tr><td class="transaction">10-19-19</td><td class="account-table-cell">Savings</td><td class="payee">Rent</td><td class="inflow">$800.00</td><td class="outflow">-</td></tr><tr><td class="transaction">10-19-19</td><td class="account-table-cell">Checking</td><td class="payee">Hapa Sushi</td><td class="inflow">-</td><td class="outflow">$13.97</td></tr><tr><td class="transaction">10-18-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Pig Train</td><td class="inflow">-</td><td class="outflow">$4.83</td></tr><tr><td class="transaction">10-18-19</td><td class="account-table-cell">Checking</td><td class="payee">RTD</td><td class="inflow">-</td><td class="outflow">$6.00</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Account</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Account</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr></table></section></div><div class="column-form"> <section class="box"><form><h2 class="section-header-centered">New Transaction</h2> <label>Type of Transaction:</label> <select><option>Expense</option><option>Deposit</option> </select> <label>Category:</label> <select><option>- Select One -</option><option>Deposit</option><option>Expense</option> </select> <label>Account from:</label> <select><option>- Select One -</option><option>Credit Card</option><option>Checking</option><option>Savings</option> </select> <label>Payee:</label> <input></input> <label>Outflow:</label> <input></input> <label>Inflow:</label> <input></input> <button class="log-expense-button">Log Expense</button></form> </section></div>'
};
