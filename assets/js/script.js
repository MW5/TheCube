$(document).ready(function(){
  //clear input on reload
  $("input").val("");

  $("#register_btn").click(function(){
    $("#cube").toggleClass("show-left");
  });

  $("#login_btn").click(function(){
    $("#cube").toggleClass("show-right");
  });
  $("#reg_name_conf_btn").click(function(){
    if(user_name_valid) {
      $("#cube").toggleClass("show-bottom");
    }
  })

  //temp fixed position cube fix
    $("#cube").toggleClass("show-left");

  //ok arrow size fixer
  var arrowBorderWidth = $(".ok_circle").width()*0.35;
  $(".ok_arrow").css("border-left", arrowBorderWidth+"px solid transparent");
  $(".ok_arrow").css("border-right", arrowBorderWidth+"px solid transparent");
  $(".ok_arrow").css("border-top", arrowBorderWidth*1.732+"px solid white");

  //input validator
  var user_name_valid = false;
  $("#user_name").keypress(function(){
    var minNameLength = 4;
    if ($("#user_name").val().length>=minNameLength && !$("#reg_name_conf_btn").hasClass("enabled")) {
      $("#reg_name_conf_btn").addClass("enabled");
      $("#reg_name_conf_btn").removeClass("disabled");
      user_name_valid = true;
    }
    if ($("#user_name").val().length<minNameLength && !$("#reg_name_conf_btn").hasClass("disabled")) {
      $("#reg_name_conf_btn").addClass("disabled");
      $("#reg_name_conf_btn").removeClass("enabled");
    }
  })


});
