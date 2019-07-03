<!DOCTYPE html>
<html lang="bg">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Startup Page Designer</title>
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/toolbox.css">
</head>
<body>
	<header class="propertable" id="docHeader" style="background-color: gray; height: 10%">
	</header>
	
	<article class="propertable" id="docMain" style="background-color: white; top: 10%;">
	</article>
	
	<footer class="propertable" id="docFooter" style="background-color: gray;">
	</footer>

	<aside>
		<?php include('toolbox.html') ?>
	</aside>

	<div id="properties">
		<div id="color">&nbsp;</div>
		<input id="color-wheel" type="color" value="#ff0000">
		<input id="size" type="number" value="10">
	</div>

	<script src="scripts/main.js"></script>
</body>
</html>