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



  // JavaScript to handle text change and copy to clipboard
  document.getElementById('options').addEventListener('change', function() {
    const selectedText = this.options[this.selectedIndex].value;
    document.getElementById('output').innerText = selectedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const textToCopy = document.getElementById('output').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Text copied to clipboard!');
});





