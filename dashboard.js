window.onload = function() {
  const username = localStorage.getItem('dashboardUsername');
  const email = localStorage.getItem('dashboardEmail');
  

  if (username && email) {
      document.getElementById('displayEmail').textContent = ` ${username}`;
      document.getElementById('new').textContent = `Welcome ${email}`;
  } else {
      document.getElementById('displayEmail').textContent = 'No data found';
      document.getElementById('new').textContent = '';
     
  }
}







document.getElementById("alertbutton").addEventListener("click", function () {
    alert("you successlly created an order");
});
document.getElementById("sell").addEventListener("click", function () {
    alert("order has been sold");
});


