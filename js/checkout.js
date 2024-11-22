// checkout.js

document.addEventListener('DOMContentLoaded', () => {
    const buyNowButton = document.getElementById('buy-now');
    buyNowButton.addEventListener('click', goToAddressPage);
});

function goToAddressPage() {
    // Perform any necessary validation before proceeding to the address page
    // For simplicity, assume validation is successful

    // Redirect to the address page
    window.location.href = 'adress.html';
}
