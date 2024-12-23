function calculateLoan() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value);
    const monthsToPay = parseInt(document.getElementById('months').value);
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay) || loanAmount <= 0 || interestRate <= 0 || monthsToPay <= 0) {
        document.getElementById('monthly-payment').textContent = '0.00';
        return;
    }
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -monthsToPay));
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
}
document.getElementById('amount').addEventListener('input', calculateLoan);
document.getElementById('interest').addEventListener('input', calculateLoan);
document.getElementById('months').addEventListener('input', calculateLoan);
