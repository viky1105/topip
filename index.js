document.getElementById("alertbutton").addEventListener("click", function () {
    alert("you successlly created an order");
});
document.getElementById("sell").addEventListener("click", function () {
    alert("order has been sold");
});


document.getElementById("showButton").addEventListener("click", function() {
  showFirstElementForSomeSeconds();
});

function showFirstElementForSomeSeconds() {
  var firstElement = document.getElementById("firstElement");
  var secondElement = document.getElementById("secondElement");
  
  firstElement.style.display = "block";
  setTimeout(function(){
    firstElement.style.display = "none";
    secondElement.style.display = "block";
  }, 3000); // Change 3000 to the number of milliseconds you want the first element to be displayed
}
