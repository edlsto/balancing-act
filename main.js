var toolbar = document.querySelector('.toolbar');
var icons = document.querySelectorAll('.icon');
var pageContent = document.querySelector("main");
toolbar.addEventListener('click', changeHighlightChangePage);
pageContent.addEventListener('click', changeHighlightChangePage);
pageContent.addEventListener('click', displayExpenseLogAlert);
pageContent.addEventListener('click', closeExpenseLogAlert);
pageContent.addEventListener('click', closeWelcomeBanner);

function removeHighlight() {
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.remove('active');
  };
};

function changePage() {
  if (event.target.parentElement.classList.contains('dashboard-icon')) {
    addDashboardHTML();
  } else if (event.target.parentElement.classList.contains('transactions-icon')) {
    addTransactionsHTML();
  } else if (event.target.parentElement.classList.contains('profile-icon')) {
    addProfileHTML();
  }
}

function changeHighlightChangePage(event) {
  removeHighlight();
  if (event.target.parentElement.parentElement === toolbar) {
    event.target.parentElement.classList.add('active');
    changePage();
  } else if (event.target.id === 'manage-accounts') {
    toolbar.firstElementChild.nextElementSibling.classList.add('active');
    addProfileHTML();
  } else if (event.target.id === 'new-transaction'){
    toolbar.firstElementChild.nextElementSibling.nextElementSibling.classList.add('active')
    addTransactionsHTML();
  }
}

function closeWelcomeBanner(event){
  if (event.target.id === "closebtn") {
    event.target.parentElement.classList.add('transition')
    pageContent.classList.add("welcome-banner-closed");
  }
};

function displayExpenseLogAlert (e) {
  if (e.target.className === "log-expense-button") {
    var required = document.querySelectorAll('.required');
    var form = e.target.parentElement;
    var logExpenseConfirmation = document.querySelector('.log-expense-confirmation')
    for (var i = 0; i < required.length; i++) {
      required[i].classList.add('validate')
    };
    if (form.checkValidity()) {
      logExpenseConfirmation.classList.add('box-appear');
    }
  };
};

function closeExpenseLogAlert (e) {
  if (e.target.id === "closebtn-confirmation") {
    var logExpenseConfirmation = document.querySelector('.log-expense-confirmation')
    logExpenseConfirmation.classList.remove('box-appear');
  }
};

//Adds back the dashboard HTML
function addDashboardHTML() {
  if (pageContent.classList.contains("welcome-banner-closed")) {
    pageContent.innerHTML = '<section class="balancing-act"><h1>Balancing Act</h1> </section><div class="columns"><div class="column-left"> <section class="account-summary"><div class="account box"><p class="label">Income</p><h3 class="account-total">$2,119.12</h3></div><div class="account box"><p class="label">Expenses</p><h3 class="account-total">$420.54</h3></div><div class="account box"><p class="label">Credit score</p><h3 class="account-total">673</h3></div> </section> <section class="account-list"><div class="title-button-row"><h2 class="section-header">Accounts</h2> <button id="manage-accounts">Manage accounts</button></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Checking</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/savings.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Savings</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Amazon Credit</div><div class="type-item">Credit Card</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Southwest Credit</div><div class="type-item">Credit Card</div></div> </section></div><div class="column-right"> <section class="transactions-box box"><div class="title-button-row"><h2 class="section-header">Recent Transactions</h2> <button id="new-transaction">New transaction</button></div><table class="dashboard-page-table"><thead><tr><th class="transaction">Date</th><th class="payee">Payee</th><th class="inflow">Inflow</th><th class="outflow">Outflow</th></tr></thead><tr><td class="transaction">Oct. 25, 2019</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">Oct. 24, 2019</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">Oct. 22, 2019</td><td class="payee">Paycheck</td><td class="inflow">$1,319.12</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 21, 2019</td><td class="payee">Trader Joe\'s</td><td class="inflow">-</td><td class="outflow">$54.92</td></tr><tr><td class="transaction">Oct. 20, 2019</td><td class="payee">Shell</td><td class="inflow">-</td><td class="outflow">$46.23</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Rent</td><td class="inflow">$800.00</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Hapa Sushi</td><td class="inflow">-</td><td class="outflow">$13.97</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">Pig Train</td><td class="inflow">-</td><td class="outflow">$4.83</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">RTD</td><td class="inflow">-</td><td class="outflow">$6.00</td></tr></table> </section></div></div>';

  } else {
    pageContent.innerHTML = '<section class="balancing-act"><h1>Balancing Act</h1> </section><div class="columns"><div class="column-left"> <section class="welcome"><h3 class="welcome-message">Welcome, Oscar!</h3> <img src="./assets/close.svg" id="closebtn"> </section> <section class="account-summary"><div class="account box"><p class="label">Income</p><h3 class="account-total">$2,119.12</h3></div><div class="account box"><p class="label">Expenses</p><h3 class="account-total">$420.54</h3></div><div class="account box"><p class="label">Credit score</p><h3 class="account-total">673</h3></div> </section> <section class="account-list"><div class="title-button-row"><h2 class="section-header">Accounts</h2> <button id="manage-accounts">Manage accounts</button></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Checking</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/savings.svg" class="account-icon"></div><div class="account-item">Wells Fargo</div><div class="type-item">Savings</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Amazon Credit</div><div class="type-item">Credit Card</div></div><div class="accounts-list-row box"><div class="icon-item"><img src="./assets/credit-card.svg" class="account-icon"></div><div class="account-item">Southwest Credit</div><div class="type-item">Credit Card</div></div> </section></div><div class="column-right"> <section class="transactions-box box"><div class="title-button-row"><h2 class="section-header">Recent Transactions</h2> <button id="new-transaction">New transaction</button></div><table class="dashboard-page-table"><thead><tr><th class="transaction">Date</th><th class="payee">Payee</th><th class="inflow">Inflow</th><th class="outflow">Outflow</th></tr></thead><tr><td class="transaction">Oct. 25, 2019</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">Oct. 24, 2019</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">Oct. 22, 2019</td><td class="payee">Paycheck</td><td class="inflow">$1,319.12</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 21, 2019</td><td class="payee">Trader Joe\'s</td><td class="inflow">-</td><td class="outflow">$54.92</td></tr><tr><td class="transaction">Oct. 20, 2019</td><td class="payee">Shell</td><td class="inflow">-</td><td class="outflow">$46.23</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Rent</td><td class="inflow">$800.00</td><td class="outflow">-</td></tr><tr><td class="transaction">Oct. 19, 2019</td><td class="payee">Hapa Sushi</td><td class="inflow">-</td><td class="outflow">$13.97</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">Pig Train</td><td class="inflow">-</td><td class="outflow">$4.83</td></tr><tr><td class="transaction">Oct. 18, 2019</td><td class="payee">RTD</td><td class="inflow">-</td><td class="outflow">$6.00</td></tr></table> </section></div></div>';
  }
};

// Adds the transactions HTML
function addTransactionsHTML() {
  pageContent.innerHTML = '<section class="transactions-page-header"><div><h1 class="section-header">Transactions</h1></div><div> <button class="transaction-button inactive">Outflow</button> <button class="transaction-button inactive">Inflow</button> <button class="transaction-button">All</button></div> </section><div class="column-accounts"> <section class="transactions-box box"><table class="transactions-page-table"><thead><tr><th class="transaction">Date</th><th class="account-table-cell">Account</th><th class="payee">Payee</th><th class="inflow">Inflow</th><th class="outflow">Outflow</th></tr></thead><tr><td class="transaction">10-25-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-22-19</td><td class="account-table-cell">Checking</td><td class="payee">Paycheck</td><td class="inflow">$1319.12</td><td class="outflow">-</td></tr><tr><td class="transaction">10-21-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Trader Joe\'s</td><td class="inflow">-</td><td class="outflow">$54.92</td></tr><tr><td class="transaction">10-20-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Shell</td><td class="inflow">-</td><td class="outflow">$46.23</td></tr><tr><td class="transaction">10-19-19</td><td class="account-table-cell">Savings</td><td class="payee">Rent</td><td class="inflow">$800.00</td><td class="outflow">-</td></tr><tr><td class="transaction">10-19-19</td><td class="account-table-cell">Checking</td><td class="payee">Hapa Sushi</td><td class="inflow">-</td><td class="outflow">$13.97</td></tr><tr><td class="transaction">10-18-19</td><td class="account-table-cell">Credit Card</td><td class="payee">Pig Train</td><td class="inflow">-</td><td class="outflow">$4.83</td></tr><tr><td class="transaction">10-18-19</td><td class="account-table-cell">Checking</td><td class="payee">RTD</td><td class="inflow">-</td><td class="outflow">$6.00</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Checking</td><td class="payee">Express</td><td class="inflow">-</td><td class="outflow">$212.24</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Account</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr><tr><td class="transaction">10-24-19</td><td class="account-table-cell">Account</td><td class="payee">Target</td><td class="inflow">-</td><td class="outflow">$82.35</td></tr></table></section></div><div class="column-form"> <section class="box transactions-page-box"><form><h2 class="section-header-centered">New Transaction</h2> <label>Type of Transaction:</label> <select><option>Inflow</option><option>Outflow</option> </select> <label>Category:</label> <select class="required" id="category" required><option value="">- Select One -</option><option value="grocery">Grocery</option><option value="bills">Bills</option><option value="fun-money">Fun Money</option><option value="paycheck">Paycheck</option> </select> <label>Account from:</label> <select class="required" id="account" required><option value="">- Select One -</option><option value="checking">Checking</option><option value="savings">Savings</option><option value="amazon-credit">Amazon Credit</option><option value="southwest-credit">Southwest Credit</option> </select> <label>Payee:</label> <input class="required" id="payee" required></input> <label>Outflow:</label> <input class="required" id="label" required></input> <label>Inflow:</label> <input class="required" id="inflow" required></input> <button class="log-expense-button" type="button">Log Expense</button></form><div class="log-expense-confirmation"><p>Your expense of $70 has been logged.</p> <img src="./assets/close.svg" id="closebtn-confirmation"></div> </section></div>';
};

// Adds the profile HTML
function addProfileHTML() {
  pageContent.innerHTML = '<section class="your-profile"><h1 class="section-header">Your Profile</h1><div class="your-profile-box box"><div class="profile-info"><h2>Oscar Holt</h2><p>Denver, CO</p><p>Member Since: 2014</p><p>Birthday: December 19, 2011</p></div><div class="edit-info-btn"> <button>Edit my info</button></div></div> </section> <section class="right-column"> <section class="your-accounts"><h1 class="section-header">Your Accounts</h1><div class="accounts-list-row box"><div class="profile-page-col1">Wells Fargo</div><div class="profile-page-col2">Savings</div><div class="profile-page-col3">Status: Active</div><div class="profile-page-col4"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></div></div><div class="accounts-list-row box"><div class="profile-page-col1">Wells Fargo</div><div class="profile-page-col2">Checking</div><div class="profile-page-col3">Status: Active</div><div class="profile-page-col4"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></div></div><div class="accounts-list-row box"><div class="profile-page-col1">Amazon Credit</div><div class="profile-page-col2">Southwest Card</div><div class="profile-page-col3">Status: Active</div><div class="profile-page-col4"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></div></div><div class="accounts-list-row box"><div class="profile-page-col1">Amazon Credit</div><div class="profile-page-col2">Credit Card</div><div class="profile-page-col3">Status: Active</div><div class="profile-page-col4"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></div></div> </section> <section class="add-an-account box"><h2>Add an Account</h2><div class="add-account-row"><div class="add-account-type"><p>Type:</p><input></div><div class="add-account-nickname"><p>Nickname:</p><input></div><div class="add-account-status"><p>Status:</p><select><option>Active</option></select></div><div class="add-account-button"><button>Add account</button></div></div> </section> </section>'
};
