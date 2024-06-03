function handleLogin() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (username === registeredUsername && password === registeredPassword) {
        alert('Login successful!');
        localStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {

        alert('Invalid username or password');

    }
}

