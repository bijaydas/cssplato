<?php

function get_header(String $select) {

?>

<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>CSSPlato</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/master.css">

	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="css/color_picker/colorpicker.css" type="text/css" />
</head>

<body class="body">
	<header>
		<nav>
			<div class="brand-logo">
				<a href="#">CSSPlato</a>
			</div>

			<div>
				<ul>
					<?php echo navigation_bar($select); ?>
				</ul>
			</div>
		</nav>
	</header>

	<div class="container">

<?php
}



function navigation_bar($select) {

	$output = "";

	if ($select == "home" || $select == "index") {
		$output .= '<li><a href="/azaro" class="selected">Home</a></li>';
	}
	else {
		$output .= '<li><a href="/cssplato">Home</a></li>';
	}

	if ($select == "box-shadow") {
		$output .= '<li><a href="box-shadow.php" class="nav-bar selected">Box Shadow</a></li>';
	}
	else {
		$output .= '<li><a href="box-shadow.php" class="nav-bar">Box Shadow</a></li>';
	}

	if ($select == "text-shadow") {
		$output .= '<li><a href="text-shadow.php" class="nav-bar selected">Text Shadow</a></li>';
	}
	else {
		$output .= '<li><a href="text-shadow.php" class="nav-bar">Text Shadow</a></li>';
	}

	if ($select == "border-radius") {
		$output .= '<li><a href="border-radius.php" class="nav-bar selected">Border Radius</a></li>';
	}
	else {
		$output .= '<li><a href="border-radius.php" class="nav-bar">Border Radius</a></li>';
	}

	if ($select == "colors") {
		$output .= '<li><a href="colors.php" class="nav-bar selected">Colors</a></li>';
	}
	else {
		$output .= '<li><a href="colors.php" class="nav-bar">Colors</a></li>';
	}

	return $output;
}
?>
