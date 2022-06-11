// get input value
function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    let inputValueText = inputValue.value;
    const inputTotal = parseFloat(inputValueText);
    return inputTotal;
}
// calculate total
document.getElementById('calculate').addEventListener('click', function () {
    const income = getInputValue('income-input');
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothInput = getInputValue('cloth-input');


    if (income > 0 && foodInput > 0 && rentInput > 0 && clothInput > 0) {
        const expenTotal = document.getElementById('ex-total');
        expenTotal.innerText = foodInput + rentInput + clothInput;
        const balance = document.getElementById('balance');
        balance.innerText = income - expenTotal.innerText;
        document.getElementById('error-1').style.visibility = 'hidden';
    }
    // calculate error
    else {
        document.getElementById('error-1').style.visibility = 'visible';
    }

})
// savings amount part

document.getElementById('save-button').addEventListener('click', function () {
    const saveParsentInput = document.getElementById('save-input');
    const saveInput = saveParsentInput.value;
    const savings = parseFloat(saveInput);

    if (savings > 0 && savings <= 100) {

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

        document.getElementById('error-2').style.visibility = 'hidden';
    }
    // savings error
    else {
        document.getElementById('error-2').style.visibility = 'visible';

        document.getElementById('saving-amount').innerText = 00;
        document.getElementById('remaining-balance').innerText = 00;
    }


})
