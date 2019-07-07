<?php

	if(!$_POST || !$_POST['content']) {
		die();
	}

	$content = $_POST['content'];
	$numberOfStars = $_POST['numberOfStars'];

	require_once('database.php');
	$connection =  (new Database())->getPDO();

	$stmt = $connection->prepare("INSERT INTO feedbacks (content, stars) VALUES (?, ?)");
	$stmt->execute([$content, $numberOfStars]);

?>