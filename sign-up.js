function handleRegister() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const email =document.getElementById('newEmail').value;

    if (username && password && user) {
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);
        localStorage.setItem('registeredUser', email);
        localStorage.setItem('dashboardUsername', username);
        localStorage.setItem('dashboardEmail', email);
        alert('Registration successful! You can now login.');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields');
    }
}



