<?php
    $image = $_FILES['image'];
   
    // check if the file exists
    if (!file_exists($image['tmp_name']))
        throw new Exception('Image file is missing in the server');
    $maxFileSize = 2 * 10e6; // in bytes
    if ($image['size'] > $maxFileSize)
        throw new Exception('Max size limit exceeded'); 
    // check if uploaded file is an image
    $imageData = getimagesize($image['tmp_name']);
    if (!$imageData) 
        throw new Exception('Invalid image');
    $mimeType = $imageData['mime'];
    // validate mime type
    $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!in_array($mimeType, $allowedMimeTypes)) 
        throw new Exception('Only JPEG, PNG and GIFs are allowed');
    
    // nice! it's a valid image
    // get file extension (ex: jpg, png) not (.jpg)
    $fileExtention = strtolower(pathinfo($image['name'] ,PATHINFO_EXTENSION));
    // create random name for your image
    $fileName = round(microtime(true)) . mt_rand() . '.' . $fileExtention; // anyfilename.jpg
    // Create the path starting from DOCUMENT ROOT of your website
    $path = 'uploads/' . $fileName;

    if (!move_uploaded_file($image['tmp_name'], $path))
        throw new Exception('Error in moving the uploaded file');

    echo $path;
?>