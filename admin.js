// Check if the admin is logged in
if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
}

document.getElementById('updateButton').addEventListener('click', () => {
    const newText = document.getElementById('newText').value;

    // Send the new text to the user page via localStorage
    localStorage.setItem('userText', newText);
});






