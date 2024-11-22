// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const productElement = button.parentElement;
        const product = {
            name: productElement.querySelector('h4').innerText,
            price: parseFloat(productElement.querySelector('p').innerText.replace('$', '')),
            image: productElement.querySelector('img').src,
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (!Array.isArray(cart)) {
            cart = [];
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartTotal();
        alert('Product added to cart');
    }

    function updateCartTotal() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        const totalElement = document.getElementById('cart-total');
        totalElement.innerText = '$' + total.toFixed(2);
    }

    // Call the function to update the cart total initially
    updateCartTotal();
});


const validCoupons = {
    'DISCOUNT10': 0.1,
    'DISCOUNT20': 0.2,
    'DISCOUNT30': 0.3
};

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value.trim().toUpperCase();
    const discount = validCoupons[couponCode];

    if (discount) {
        const totalElement = document.getElementById('cart-total');
        let currentTotal = parseFloat(totalElement.textContent.replace('$', ''));
        const newTotal = currentTotal - (currentTotal * discount);
        totalElement.textContent = `$${newTotal.toFixed(2)}`;
        alert(`Coupon applied! You got a ${discount * 100}% discount.`);
    } else {
        alert('Invalid coupon code');
    }
}
