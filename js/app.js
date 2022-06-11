function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    let inputValueText = inputValue.value;
    const inputTotal = parseFloat(inputValueText);
    return inputTotal;
}
// 
document.getElementById('calculate').addEventListener('click', function () {

    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothInput = getInputValue('cloth-input');

    const expenTotal = document.getElementById('ex-total');
    expenTotal.innerText = foodInput + rentInput + clothInput;
})

