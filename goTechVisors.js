function payNow() { 
  window.open( 
    "https://www.paypal.com/paypalme2/apangolin/10", "_blank"); 
} 

function checkTotal() {
  document.listForm.total.value = '';
  var sum = 0;
  for (i=0;i<document.listForm.choice.length;i++) {
    if (document.listForm.choice[i].checked) {
      sum = sum + parseInt(document.listForm.choice[i].value);
    }
  }
  document.listForm.total.value = sum;
}
