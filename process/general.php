<?php

require "config.php";

$name 			= $_POST['name'];
$email 			= $_POST['email'];
$message 		= $_POST['message'];
$contact_reason = $_POST['contact_reason'];

$json_array 	= array();

if (!empty($name) && !empty($email) && !empty($message)) {

	$connect = new PDO("mysql:host=".$globals["host"].";dbname=".$globals["dbname"], $globals["user"], $globals["pword"]);

	$query   = $connect->prepare("INSERT INTO form_data (ID, NAME, EMAIL, MESSAGE, CONTACT_REASON, DATE, TIME) VALUES (NULL, ?, ?, ?, ?, NOW(), NOW())");

	$query->bindParam(1, $name);
	$query->bindParam(2, $email);
	$query->bindParam(3, $message);
	$query->bindParam(4, $contact_reason);

	if ($query->execute()) $json_array["status"] = 200;
	else $json_array["status"] = 201;
}
else {
	$json_array["status"] = 203;
}

$json = json_encode($json_array);

echo $json;
