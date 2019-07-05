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
	<header class="propertableByTag" id="docHeader" style="background-color: gray; height: 10%">
	</header>
	
	<article class="propertableByTag" id="docMain" style="background-color: white; top: 10%;">
		<form action="upload.php" method="post" enctype="multipart/form-data">
			Select image to upload:
			<input type="file" name="fileToUpload" id="fileToUpload">
			<input type="submit" onclick="uploadImage()" value="Upload Image" name="submit">
		</form>
	</article>
	
	<footer class="propertableByTag" id="docFooter" style="background-color: gray;">
	</footer>

	<aside>
		<?php include('toolbox.html') ?>
	</aside>

	<?php include('feedback.html') ?>



	<div id="properties">
		<div id="color">&nbsp;</div>
		<input id="color-wheel" type="color" value="#ff0000">
		<input id="size" type="number" value="10">
	</div>

	<script src="scripts/main.js"></script>
</body>
</html>