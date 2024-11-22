// status.js

document.addEventListener('DOMContentLoaded', () => {
    const orderDetailsList = document.getElementById('order-details');
    
    // Retrieve order details from localStorage (or a mockup)
    const address = JSON.parse(localStorage.getItem('address')) || {};
    const paymentDetails = JSON.parse(localStorage.getItem('paymentDetails')) || {};

    // Display order details
    const addressDetails = `
        <li><strong>Name:</strong> ${address.name}</li>
        <li><strong>Email:</strong> ${address.email}</li>
        <li><strong>Phone:</strong> ${address.phone}</li>
        <li><strong>Address:</strong> ${address.address}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}</li>
    `;
    
    const paymentDetailsInfo = `
        <li><strong>Card Name:</strong> ${paymentDetails.cardName}</li>
        <li><strong>Card Number:</strong> **** **** **** ${paymentDetails.cardNumber.slice(-4)}</li>
        <li><strong>Expiration Date:</strong> ${paymentDetails.expDate}</li>
    `;
    
    orderDetailsList.innerHTML = addressDetails + paymentDetailsInfo;

    // Add event listeners to buttons
    document.getElementById('refresh-status').addEventListener('click', refreshStatus);
    document.getElementById('home-page').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the home page
    });
});

function refreshStatus() {
    alert('Order status refreshed! (This is a placeholder function)');
    // Here you would add logic to actually check the order status
}
