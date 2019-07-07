<?php

function scanAllDir($dir) {
	$result = [];
	foreach(scandir($dir) as $filename) {
	  if ($filename[0] === '.') continue;
	  $filePath = $dir . '/' . $filename;
	  if (is_dir($filePath)) {
		foreach (scanAllDir($filePath) as $childFilename) {
		  $result[] = $filename . '/' . $childFilename;
		}
	  } else {
		$result[] = $filename;
	  }
	}
	return $result;
}

if(!$_POST || !$_POST['folder']) {
	die();
}

$folder = $_POST['folder'];

$zip = new ZipArchive();
$folderName = substr($folder, strrpos($folder, "/")+1);
$filename = "./$folderName.zip";

if ($zip->open($filename, ZipArchive::CREATE) !== TRUE) {
	exit("cannot open <$filename>\n");
}

foreach(scanAllDir('.') as $file) {
	$zip->addFile($file);
}

$zip->close();

if (file_exists($filename)) {
	header('Content-Description: File Transfer');
	header('Content-Type: application/octet-stream');
	header('Content-Disposition: attachment; filename="'.basename($filename).'"');
	header('Expires: 0');
	header('Cache-Control: must-revalidate');
	header('Pragma: public');
	header('Content-Length: ' . filesize($filename));
	readfile($filename);
	exit;
}

?>