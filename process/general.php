<?php

$name 			= $_POST['name'];
$email 			= $_POST['email'];
$message 		= $_POST['message'];
$contact_reason = $_POST['contact_reason'];

$connect = new PDO("host=localhost;dbname=hogwarts", "root", "");
