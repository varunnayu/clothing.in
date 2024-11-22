let users = JSON.parse(localStorage.getItem('users')) || {};

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedInUser')) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        showProfile(user);
    }
});

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username].password === password) {
        const user = users[username];
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        showProfile(user);
    } else {
        alert('Invalid username or password');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const name = document.getElementById('register-name').value;
    const img = document.getElementById('register-img').value;

    if (!username || !password || !name || !img) {
        alert('Please fill in all fields');
        return;
    }

    if (users[username]) {
        alert('Username already taken');
        return;
    }

    users[username] = { password, name, img };
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now log in.');
    showLoginForm();
}

function showProfile(user) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('profile-img').src = user.img;
    document.getElementById('profile-name').innerText = user.name;
}

function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showRegistrationForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
