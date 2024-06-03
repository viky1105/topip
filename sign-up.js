function handleRegister() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    if (username && password) {
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);
        alert('Registration successful! You can now login.');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
}



