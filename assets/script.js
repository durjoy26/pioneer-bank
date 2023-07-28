// login button event handler
let enterBtn = document.getElementById('enter-btn');
let bankStatus = document.getElementById('bank-area');
let loginPage = document.getElementById('login-area');
enterBtn.addEventListener('click', function () {
    loginPage.style.display = 'none';
    bankStatus.style.display = 'block';
})


// deposite amount event handler
let deposite = document.getElementById('addDeposite');
    deposite.addEventListener('click', function () {     
    let depositeNumber = document.getElementById('depositeAmount').value;
    depositeNumber = parseFloat(depositeNumber);

    let currentDeposite = document.getElementById('currentDeposite').innerText;
    currentDeposite = parseFloat(currentDeposite);

    let total = depositeNumber + currentDeposite;

    document.getElementById('currentDeposite').innerText = total;
    document.getElementById('depositeAmount').value = '';

    let currentBalance = document.getElementById('currentBalence').innerText;
    currentBalance = parseFloat(currentBalance);
    let totalDeposite = total + currentBalance;
    document.getElementById('currentBalence').innerText = totalDeposite;

    }) 


// withdraw amount event handler
let withdraw = document.getElementById('withdraw');
    withdraw.addEventListener('click', function () {     
    let withdrawNumber = document.getElementById('withdrawAmount').value;
    withdrawNumber = parseFloat(withdrawNumber);
    let currentWithdraw = document.getElementById('currentWithdraw').innerText;
    currentWithdraw = parseFloat(currentWithdraw);

    let total = withdrawNumber + currentWithdraw;

    document.getElementById('currentWithdraw').innerText = total;
    document.getElementById('withdrawAmount').value = '';
    
    let currentBalance = document.getElementById('currentBalence').innerText;
    currentBalance = parseFloat(currentBalance);
    let totalDeposite = currentBalance - total;
    document.getElementById('currentBalence').innerText = totalDeposite;
    })
