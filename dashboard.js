window.onload = function() {
  const username = localStorage.getItem('exampleInputEmail1');
  const password = localStorage.getItem('exampleInputPassword1');

  if (username && password) {
      document.getElementById('displayUsername').textContent = ` ${username}`;
      document.getElementById('displayPassword').textContent = ` ${password}`;
  } else {
      document.getElementById('displayUsername').textContent = 'No data found';
      document.getElementById('displayPassword').textContent = '';
  }
}







document.getElementById("alertbutton").addEventListener("click", function () {
    alert("you successlly created an order");
});
document.getElementById("sell").addEventListener("click", function () {
    alert("order has been sold");
});


