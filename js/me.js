$("#ss").click(function(){
  var h = $("#f_height").val();
  var w = $("#f_weight").val();
  var r = w/((h/100.0)^2);
  $("#mresult").val(r);
});
