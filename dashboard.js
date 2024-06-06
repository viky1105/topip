window.onload = function() {
    const username = localStorage.getItem('dashboardUsername');
    const email = localStorage.getItem('dashboardEmail');

    if (username && email) {
        document.getElementById('displayUsername').textContent = `Welcome, ${username}!`;
        document.getElementById('displayEmail').textContent = `Email: ${email}`;
    } else {
        document.getElementById('displayUsername').textContent = 'No data found';
        document.getElementById('displayEmail').textContent = '';
    }
}

// Function to update the text on the user page
function updateUserText() {
    const userText = localStorage.getItem('userText');
    if (userText) {
        document.getElementById('userText').innerText = userText;
    }
}

// Update text on page load
updateUserText();

// Listen for storage changes to update the text dynamically
window.addEventListener('storage', updateUserText);




document.getElementById("alertbutton").addEventListener("click", function () {
    alert("you successlly created an order");
});
document.getElementById("sell").addEventListener("click", function () {
    alert("order has been sold");
});


