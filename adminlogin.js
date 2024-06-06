document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mock login credentials
    const mockUsername = 'admin';
    const mockPassword = 'password123';

    if (username === mockUsername && password === mockPassword) {
        // Store a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('isAdminLoggedIn', 'true');
        // Redirect to admin page
        window.location.href = 'admin.html';
    } else {
        alert('Invalid username or password');
    }
});
