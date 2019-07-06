<?php

    if(!$_POST || !$_POST['content']) {
        die();
    }

    $content = $_POST['content'];
    $numberOfStars = $_POST['numberOfStars'];

    $connection = new PDO('mysql:host=localhost;dbname=WebProject;charset=utf8', 'root', '');

    $stmt = $connection->prepare("INSERT INTO feedbacks (content, stars) VALUES (?, ?)");
    $stmt->execute([$content, $numberOfStars]);

?>