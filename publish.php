<?php

if(!$_POST || !$_POST['html']) {
	die();
}

$html = $_POST['html'];

$random = round(microtime(true)) . mt_rand();
$folderName = date("YmdHis");
// Create the path starting from DOCUMENT ROOT of your website
$path = 'published/' . $folderName . '_' . $random;

if (!file_exists('published/' )) {
	mkdir('published/');
}

if (!file_exists($path)) {
	mkdir($path);
}

$filePath = $path . "/index.html";

$file = fopen($filePath, "w");

fwrite($file, $html);

fclose($file);

if (!file_exists($path . '/scripts')) {
	mkdir($path . '/scripts');
}
if (!file_exists($path . '/styles')) {
	mkdir($path . '/styles');
}

copy('scripts/mainPublish.js', $path . '/scripts/mainPublish.js');
copy('styles/mainPublish.css', $path . '/styles/mainPublish.css');
copy('styles/feedbackPublish.css', $path . '/styles/feedbackPublish.css');
copy('styles/toolboxPublish.css', $path . '/styles/toolboxPublish.css');

$imagesStr = $_POST['images'];
$images = explode("|", $imagesStr);

if (count($images) > 0 && !file_exists($path . '/uploads')) {
	mkdir($path . '/uploads');
}

foreach ($images as $image) {
	rename($image, $path . '/' . $image);
}

echo $filePath;

?>