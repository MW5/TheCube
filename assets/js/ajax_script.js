$(window).on('load', function(){

  $("#reg_pass_conf_btn").click(function(){
      $.post("http://localhost/theCubeBackend.php",
      {
          user_name: $("#user_name").val(),
          user_email: $("#user_email").val(),
          user_pass: $("#user_pass").val()
      },
      function(data, status){
//serve name and email taken notifications
//display hash
          alert("Zwrotka: " + data + "\nStatus: " + status);
      });
  });

});
