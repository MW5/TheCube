$(document).ready(function() {

  $("#register_btn").click(function(){
    $("#cube").toggleClass("show-left");
  });

  $("#login_btn").click(function(){
    $("#cube").toggleClass("show-right");
  });

  //temp fixed position cube fix
    $("#cube").toggleClass("show-left");

  //ok arrow size fixer
  var arrowBorderWidth = $(".ok_circle").width()*0.35;
  $(".ok_arrow").css("border-left", arrowBorderWidth+"px solid transparent");
  $(".ok_arrow").css("border-right", arrowBorderWidth+"px solid transparent");
  $(".ok_arrow").css("border-top", arrowBorderWidth*2+"px solid red");

});
