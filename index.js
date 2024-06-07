function handleLogin() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const mockUsername = 'admin';
    const mockPassword = 'password123';

    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (username === registeredUsername && password === registeredPassword) {
        alert('Login successful!');
        localStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else if (username === mockUsername && password === mockPassword) {
         // Store a flag in localStorage to indicate that the user is logged in
         localStorage.setItem('isAdminLoggedIn', 'true');
         // Redirect to admin page
         window.location.href = 'admin.html';
       

    } else {

        alert('Invalid username or password');

    }
}

