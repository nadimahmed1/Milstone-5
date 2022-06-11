function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    let inputValueText = inputValue.value;
    const inputTotal = parseFloat(inputValueText);
    return inputTotal;
}
// 
document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputValue('income-input');
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothInput = getInputValue('cloth-input');

    const expenTotal = document.getElementById('ex-total');
    expenTotal.innerText = foodInput + rentInput + clothInput;

    const balance = document.getElementById('balance');
    balance.innerText = income - expenTotal.innerText;
})

document.getElementById('save-button').addEventListener('click', function () {
    const saveParsentInput = document.getElementById('save-input');
    const saveInput = saveParsentInput.value;
    const savings = parseFloat(saveInput);
    const income = getInputValue('income-input');
    const savingAmount = document.getElementById('saving-amount');

    savingAmount.innerText = (income * savings / 100);

    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothInput = getInputValue('cloth-input');

    const expenTotal = document.getElementById('ex-total');
    expenTotal.innerText = foodInput + rentInput + clothInput;

    const balance = document.getElementById('balance');
    balance.innerText = income - expenTotal.innerText;

    const remainBalance = document.getElementById('remaining-balance');
    remainBalance.innerText = balance.innerText - savingAmount.innerText;
})
