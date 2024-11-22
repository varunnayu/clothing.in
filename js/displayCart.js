document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.image;
        img.classList.add('product-image');
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.innerText = item.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.innerText = '$' + item.price.toFixed(2);
        row.appendChild(priceCell);

        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => removeItem(index));
        removeButtonCell.appendChild(removeButton);
        row.appendChild(removeButtonCell);

        cartItemsContainer.appendChild(row);
    });
});

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Refresh the page to reflect the changes
}
