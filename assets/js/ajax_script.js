$(window).on('load', function(){

  $("#reg_pass_conf_btn").click(function(){
      $.post("http://localhost/theCubeBackend.php",
      {
          user_name: $("#user_name").val(),
          user_email: $("#user_email").val(),
          user_pass: $("#user_pass").val(),
          req_type: "register_user"
      },
      function(data, status){
        if (status == "success") {
          var boxHeight = $("#reg_conf_caption").height()+"px";
          if (data == "name taken") {
            $("#back_conf_reg_main").hide();
            $("#reg_conf_caption").hide();
            $("#reg_conf_link").hide();
            $("#back_conf_reg_email").hide();
            $("#reg_conf_caption").text(data);
            $("#reg_conf_caption").css("line-height",boxHeight);
            $("#reg_conf_caption").fadeIn(1500);
            $("#back_conf_reg_name").show();

          } else if (data == "email taken") {
            $("#back_conf_reg_main").hide();
            $("#reg_conf_caption").hide();
            $("#reg_conf_link").hide();
            $("#back_conf_reg_name").hide();
            $("#reg_conf_caption").text(data);
            $("#reg_conf_caption").css("line-height",boxHeight);
            $("#reg_conf_caption").fadeIn(1500);
            $("#back_conf_reg_email").show();
          } else {
            $("#reg_conf_caption").hide();
            $("#reg_conf_link").hide();
            $("#back_conf_reg_email").hide();
            $("#back_conf_reg_name").hide();
            $("#reg_conf_caption").css("line-height","normal");
            $("#reg_conf_caption").text(
              "W normalnej sytuacji tutaj byłaby informacja, że na podany adres"+
              "email wysłany został link aktywacyjny. W tej wersji, aby uniknąć"+
              " stosowania mailtrapa, wygenerowany hash podawany jest poniżej:");
            $("#reg_conf_caption").fadeIn(1500);
            $("#reg_conf_link").text(data);
            $("#back_conf_reg_main").show();
            $("#reg_conf_link").fadeIn(1500);
          }
        } else {
          $("#reg_conf_caption").fadeOut(1500);
          $("#reg_conf_caption").text(data);
          $("#reg_conf_caption").fadeIn(1500);
        }
      });
  });

  $("#reg_conf_link").click(function(){
    $.post("http://localhost/theCubeBackend.php",
    {
        registration_hash: $("#reg_conf_link").text(),
        req_type: "confirm_reg"
    },
    function(data, status){
      var boxHeight = $("#reg_conf_caption").height()+"px";
      if (status=="success" && data>0) {
        $("#reg_conf_caption").hide();
        $("#reg_conf_link").hide();
        $("#reg_conf_caption").css("line-height",boxHeight);
        $("#reg_conf_caption").text(
          "Konto zostało potwierdzone");
        $("#reg_conf_caption").fadeIn(1000);
        $("#back_conf_reg_main").fadeIn(1000);
      } else {
        $("#reg_conf_caption").hide();
        $("#reg_conf_link").hide();
        $("#reg_conf_caption").css("line-height",boxHeight);
        $("#reg_conf_caption").text(
          "Coś poszło źle:( Spróbuj ponownie");
        $("#reg_conf_caption").fadeIn(1000);
        $("#back_conf_reg_main").fadeIn(1000);
      }
    });
  });

  $("#login_conf_btn").click(function(){
      $.post("http://localhost/theCubeBackend.php",
      {
          user_name: $("#login_name").val(),
          user_pass: $("#login_pass").val(),
          req_type: "login"
      },
      function(data, status){
        if (status == "success") {
          if (data == 1) {
            $.get("http://localhost/theCubeBackend.php",
            {
                req_type: "get_list"
            },
            function(data, status){
                          console.log(status);
              console.log(data);
            });
            $("#cube").removeClass();
            $("#cube").toggleClass("show-top");
          } else {
            $("#bad_auth").text("Błędne dane logowania lub konto nie zostało aktywowane");
            $("#bad_auth").fadeIn(1000).delay(2000).fadeOut(1000);
          }
        } else {
          $("#bad_auth").text("Coś poszło źle:( Spróbuj ponownie");
          $("#bad_auth").fadeIn(1000).delay(2000).fadeOut(1000);
        }
      });
  });

});
