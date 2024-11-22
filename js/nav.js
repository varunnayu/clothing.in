const createNav = () => {
    
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html"><img src="img/dark-logo.png" class="brand-logo"></a>
            <div class="nav-items">
                <a href="login.html"><img src="img/user.png" alt=""></a>
                <a href="cart.html"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="women.html" class="link">Women</a></li>
            <li class="link-item"><a href="men.html" class="link">Men</a></li>
            <li class="link-item"><a href="about.html" class="link">About</a></li>

        </ul>
        
    `;
}

createNav();