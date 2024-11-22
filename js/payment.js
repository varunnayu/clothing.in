// payment.js

document.addEventListener('DOMContentLoaded', () => {
    const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', goToConfirmationPage);
});

function goToConfirmationPage() {
    // Perform any necessary validation before confirming the order
    // For simplicity, assume validation is successful

    // Redirect to the order confirmation page
    window.location.href = 'confirmation.html';
}
