<?php
header('Access-Control-Allow-Origin: *');

//req_types:
//"register_user"
//"confirm_reg"
//login
//get_list
$reqType = htmlspecialchars($_REQUEST["req_type"]);

$serverName = "localhost";
$username = "theCube";
$password = "testpass";
$DBName = "theCube";

if ($reqType=="register_user") {
  $uN = htmlspecialchars($_POST["user_name"]);
  $uE = htmlspecialchars($_POST["user_email"]);
  $uP = htmlspecialchars($_POST["user_pass"]);

  $uNMinLength = 4;
  $uNMaxLength = 30;
  $uEMaxLength = 30;
  $uPMinLength = 6;
  $uPMaxLength = 30;
  $inputValid = false;
  //proper email validation disabled for testing
  if(strlen($uN)>=$uNMinLength && strlen($uN)<=$uNMaxLength &&
   strlen($uE)<=$uEMaxLength && /*filter_var($uE, FILTER_VALIDATE_EMAIL) &&*/
    strlen($uP)>=$uPMinLength && strlen($uP)<=$uPMaxLength) {
      $inputValid;
      $inputValid = true;
  }
  if ($inputValid) {
    try {
       $conn = new PDO("mysql:host=$serverName;dbname=$DBName", $username, $password);
       // set the PDO error mode to exception
       $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
       $sql = "SELECT count(*) FROM users WHERE user_name = '$uN'";
       $result = $conn->prepare($sql);
       $result->execute();
       $resultsNum = $result->fetchColumn();
       if ($resultsNum>0) {
         echo "name taken";
       } else {
         $sql = "SELECT count(*) FROM users WHERE user_email = '$uE'";
         $result = $conn->prepare($sql);
         $result->execute();
         $resultsNum = $result->fetchColumn();
         if ($resultsNum>0) {
           echo "email taken";
         } else {
           //generate hash and add user if username available
           $regHash = md5($uN.$uP);
           $sql = "INSERT INTO users (user_name, user_email, user_password, registration_hash, is_registered)
            VALUES ('$uN', '$uE', '$uP', '$regHash', 0)";
           $result = $conn->prepare($sql);
           $result->execute();
           echo "$regHash";
         }
       }
    }
    catch(PDOException $e)
       {
       echo "Błąd połączenia: " . $e->getMessage();
       }
  }
} elseif ($reqType=="confirm_reg") {
  $regHash = htmlspecialchars($_POST["registration_hash"]);
  try {
     $conn = new PDO("mysql:host=$serverName;dbname=$DBName", $username, $password);
     // set the PDO error mode to exception
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $sql = "UPDATE users SET is_registered=1 WHERE registration_hash='$regHash'";
     $result = $conn->prepare($sql);
     $result->execute();
     echo $result->rowCount();
  }
  catch(PDOException $e) {
     echo "Błąd połączenia: " . $e->getMessage();
  }
} elseif ($reqType=="login") {
  $uN = htmlspecialchars($_POST["user_name"]);
  $uP = htmlspecialchars($_POST["user_pass"]);
  try {
     $conn = new PDO("mysql:host=$serverName;dbname=$DBName", $username, $password);
     // set the PDO error mode to exception
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $sql = "SELECT * FROM users WHERE user_name='$uN' AND user_password='$uP' AND is_registered=1";
     $result = $conn->prepare($sql);
     $result->execute();
     echo $result->rowCount();
  }
  catch(PDOException $e) {
     echo "Błąd połączenia: " . $e->getMessage();
  }
} elseif ($reqType=="get_list") {
  try {
     $conn = new PDO("mysql:host=$serverName;dbname=$DBName", $username, $password);
     // set the PDO error mode to exception
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     $sql = "SELECT * FROM users";
     $result = $conn->prepare($sql);
     $result->execute();
     $resultAssoc = $result->fetchAll(PDO::FETCH_ASSOC);
     echo json_encode($resultAssoc);
  }
  catch(PDOException $e) {
     echo "Błąd połączenia: " . $e->getMessage();
  }
}



?>
