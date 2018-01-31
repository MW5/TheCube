$(document).ready(function(){

  $("#reg_pass_conf_btn").click(function(){
      $.post("http://localhost/theCubeBackend.php",
      {
          user_name: $("#user_name").val(),
          user_email: $("#user_email").val(),
          user_pass: $("#user_pass").val()
      },
      function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
      });
  });

});
