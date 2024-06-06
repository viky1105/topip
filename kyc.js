window.onload = function() {
    const user = localStorage.getItem('userinfo');

    if (user) {
        document.getElementById('user').textContent = `${user}`;
        
    }
}