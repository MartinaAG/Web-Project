<!DOCTYPE html>
<html lang="bg">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Startup Page Designer</title>
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/toolbox.css">
	<link rel="stylesheet" href="styles/feedback.css">
</head>
<body>
	<header class="propertableByTag" id="docHeader" style="background-color: rgb(158, 158, 158); height: 10%">
		
	</header>
	
	<article class="propertableByTag" id="docMain" style="background-color: rgb(255, 255, 255); top: 10%;">
		
	</article>
	
	<footer class="propertableByTag" id="docFooter" style="background-color: rgb(158, 158, 158); height: 10%">
	</footer>

	<aside class="asideSection" data-publish="false">
		<?php include('toolbox.html') ?>
	</aside>

	<?php include('feedback.html') ?>

	<div id="properties" data-publish="false">
		<div id="color">&nbsp;</div>
		<div id="textColor">&nbsp;</div>
		<input id="color-wheel" type="color" value="#ff0000">
		<input id="size" type="number" value="10">
		<img id="align" src="images/align.png">
		<img id="removeLayout" src="images/remove.png">
	</div>

	<script src="scripts/main.js"></script>
	<script data-publish="false">
		<?php
			if($_GET && $_GET['template'] && $_GET['template'] != "00") {
				$number = $_GET['template'];

				require_once('database.php');
				$connection =  (new Database())->getPDO();

				$stmt = $connection->prepare("SELECT script FROM templates WHERE number = ?");
				$stmt->execute([$number]);
				$rows = $stmt->fetchALL(PDO::FETCH_NUM);

				echo $rows[0][0];
			}
		?>
		addSection('hdft', 3, 'docHeader');
		addSection('hdft', 3, 'docFooter');
	</script>
</body>
</html>