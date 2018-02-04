$(window).on('load', function(){

    //temp fixed position cube fix
      // $("#cube").toggleClass("show-top");

  //clear input on reload
  $("input").val("");

  //disable tab key
  $("input").keypress(function (evt) {

  var keycode = evt.keyCode;
  if (keycode  == 9) {
    return false;
  }
});

  //nav
  $("#register_btn").click(function(){
    $("#cube").removeClass();
    $("#cube").toggleClass("show-left");
  });

  $("#login_btn").click(function(){
    $("#cube").removeClass();
    $("#cube").toggleClass("show-right");
  });

  $("#back_name_main").click(function(){
    $("#cube").removeClass();
    $("#cube").toggleClass("show-front");
  });
  $("#back_login_main").click(function(){
    $("#cube").removeClass();
    $("#cube").toggleClass("show-front");
  });
  $("#back_list_main").click(function(){
    $("#the_list").html("");
    $("#cube").removeClass();
    $("#cube").toggleClass("show-front");
  });
  $("#back_email_name").click(function(){
    $( "#user_wrapper" ).animate({
      opacity: 1,
      top: "0%",
    }, 1000);
    $( "#email_wrapper" ).animate({
      opacity: 0,
      top: "0%",
    }, 1000);
    $( "#pass_wrapper" ).animate({
      top: "0%",
    }, 1000);
  })
  $("#back_pass_email").click(function(){
    $( "#user_wrapper" ).animate({
        top: "-100%",
    }, 1000);
    $( "#email_wrapper" ).animate({
      opacity: 1,
      top: "-100%",
    }, 1000);
    $( "#pass_wrapper" ).animate({
      opacity: 0,
      top: "-100%",
    }, 1000);
  })

  $("#back_conf_reg_main").click(function(){
    $("#cube").removeClass();
    $("#cube").toggleClass("show-front");
  });

  $("#back_conf_reg_name").click(function(){
    $( "#user_wrapper" ).animate({
      opacity: 1,
      top: "0%",
    }, 1000);
    $( "#email_wrapper" ).animate({
      opacity: 0,
      top: "0%",
    }, 1000);
    $( "#pass_wrapper" ).animate({
      top: "0%",
    }, 1000);
    $("#cube").removeClass();
    $("#cube").toggleClass("show-left");
  });
  $("#back_conf_reg_email").click(function(){
    $( "#user_wrapper" ).animate({
        top: "-100%",
    }, 1000);
    $( "#email_wrapper" ).animate({
      opacity: 1,
      top: "-100%",
    }, 1000);
    $( "#pass_wrapper" ).animate({
      opacity: 0,
      top: "-100%",
    }, 1000);
    $("#cube").removeClass();
    $("#cube").toggleClass("show-left");
  });

  //change input mode to email
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

  //change input mode to password
  $("#reg_email_conf_btn").click(function(){
    if(user_email_valid) {
      $( "#name_wrapper" ).animate({
        top: "-200%",
      }, 1000);
      $( "#email_wrapper" ).animate({
        opacity: 0,
        top: "-200%",
      }, 1000);
      $( "#pass_wrapper" ).animate({
        opacity: 1,
        top: "-200%",
      }, 1000);
    }
  });

  //change cube side to email link info
  $("#reg_pass_conf_btn").click(function(){
    $("#cube").toggleClass("show-bottom");
  });

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
  var minNameLength = 4;
  var maxNameLength = 30;
  $("#user_name").keyup(function(){
    if ($("#user_name").val().length>=minNameLength &&
        !$("#reg_name_conf_btn").hasClass("enabled") &&
          $("#user_name").val().length<=maxNameLength) {
      $("#reg_name_conf_btn").addClass("enabled");
      $("#reg_name_conf_btn").removeClass("disabled");
      user_name_valid = true;
    }
    if ($("#user_name").val().length<minNameLength || $("#user_name").val().length>maxNameLength &&
          !$("#reg_name_conf_btn").hasClass("disabled")
            ) {
      $("#reg_name_conf_btn").addClass("disabled");
      $("#reg_name_conf_btn").removeClass("enabled");
      user_name_valid = false;
    }
  })

  //email validator
  function validEmail() {
    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test($("#user_email").val());
  }
  var maxEmailLength = 30;
  $("#user_email").keyup(function(){
    if (!$("#reg_email_conf_btn").hasClass("enabled") &&
          validEmail() && $("#user_email").val().length<=maxEmailLength) {
      $("#reg_email_conf_btn").addClass("enabled");
      $("#reg_email_conf_btn").removeClass("disabled");
      user_email_valid = true;
    }
    if (!$("#reg_email_conf_btn").hasClass("disabled") &&
        !validEmail() || $("#user_email").val().length>maxEmailLength) {
      $("#reg_email_conf_btn").addClass("disabled");
      $("#reg_email_conf_btn").removeClass("enabled");
      user_email_valid = false;
    }
  })

  //password validator
  var minPassLength = 6;
  var maxPassLength = 30;
  $("#user_pass").keyup(function(){
    if ($("#user_pass").val().length>=minPassLength &&
          !$("#reg_pass_conf_btn").hasClass("enabled") &&
            $("#user_pass").val().length<=maxPassLength) {
      $("#reg_pass_conf_btn").addClass("enabled");
      $("#reg_pass_conf_btn").removeClass("disabled");
      user_pass_valid = true;
    }
    if ($("#user_pass").val().length<minPassLength || $("#user_pass").val().length>maxPassLength &&
          !$("#reg_pass_conf_btn").hasClass("disabled")) {
      $("#reg_pass_conf_btn").addClass("disabled");
      $("#reg_pass_conf_btn").removeClass("enabled");
      user_pass_valid = false;
    }
  })

});
