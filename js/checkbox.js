$("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('friday-time');
    
}

else {
  document.getElementById('friday-time').style.display = "none";
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
   localStorage.removeItem("1");
});

 }
 

});
  $("#checkboxii").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('thurs-time');
  }
  else {
    document.getElementById('thurs-time').style.display = "none";
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
    localStorage.removeItem("2");
});
 }
  
  
});


  $("#checkbox-container :checkbox").on("change", function(){
  
});
var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});
