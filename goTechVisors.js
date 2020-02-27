function payNow() { 
  window.open( 
    "https://www.paypal.com/paypalme2/apangolin/50", "_blank"); 
} 

function scheduleFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

