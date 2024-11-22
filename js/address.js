// address.js

document.addEventListener('DOMContentLoaded', () => {
    const proceedToPaymentButton = document.getElementById('proceed-to-payment');
    proceedToPaymentButton.addEventListener('click', goToPaymentPage);
});

function goToPaymentPage() {
    // Perform any necessary validation before proceeding to the payment page
    // For simplicity, assume validation is successful

    // Redirect to the payment page
    window.location.href = 'payment.html';
}
