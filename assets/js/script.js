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
      $( "#user_wrapper" ).animate({
        opacity: 0,
        top: "-100%",
      }, 1000);
      $( "#email_wrapper" ).animate({
        opacity: 1,
        top: "-100%",
      }, 1000);
      $( "#pass_wrapper" ).animate({
        top: "-100%",
      }, 1000);
    }
  });

  //temp fixed position cube fix
    $("#cube").toggleClass("show-left");

  //ok arrow size fixer
  var arrowBorderWidth = $(".ok_circle").width()*0.35;
  $(".ok_arrow").css("border-left", arrowBorderWidth+"px solid transparent");
  $(".ok_arrow").css("border-right", arrowBorderWidth+"px solid transparent");
  $(".ok_arrow").css("border-top", arrowBorderWidth*1.732+"px solid white");

  //input validator
  var user_name_valid = false;
  var user_email_valid = false;
  var user_pass_valid = false;

  //name validator
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

  //email validator
  function validEmail() {
    var emailRegex = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;;
    return emailRegex.test($("#user_email").val());
  }
  $("#user_email").keypress(function(){
    var minEmailLength = 5;
    console.log("test");

    if (!$("#reg_email_conf_btn").hasClass("enabled") && validEmail()) {
      $("#reg_email_conf_btn").addClass("enabled");
      $("#reg_email_conf_btn").removeClass("disabled");
      user_email_valid = true;
    }
    if (!$("#reg_email_conf_btn").hasClass("disabled") && !validEmail()) {
      $("#reg_email_conf_btn").addClass("disabled");
      $("#reg_email_conf_btn").removeClass("enabled");
    }
  })

});
