function handleRegister() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const email = document.getElementById('exampleInputEmail1').value;

    if (username && password && email) {
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('dashboardUsername', username);
        localStorage.setItem('dashboardEmail', email);
        alert('Registration successful! You can now login.');
        window.location.href = 'index.html'; // Ensure this path is correct
    } else {
        alert('Please fill in all fields');
    }
}
