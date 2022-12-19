<?php
require "connect.php";

$login = $_POST['login'];
$email = $_POST['email'];

if ($login == "") {
	// echo "Ты не указал свой логин";
	exit();
} 
elseif ($email=="") {
	// echo "Ты не указал почту";
	exit();
}

$main = "SELECT email FROM users WHERE email = '$email'";
$row = $pdo->query($main);
$user = $row->fetch(PDO::FETCH_ASSOC);


if (!empty($user["email"])) {
	echo "Ты был регистрирован ранее,кликни сюда чтобы идти дальше";
}
else{

$sql = "INSERT INTO users(login,email) VALUES(?,?)";
$query = $pdo->prepare($sql);
$query->execute([$login, $email]);
echo "Ты успешно зарегистрировался,кликни сюда ";

}







?>