<?php
header('Content-Type:image/jpeg');
include('../plugin/resize/resizeimg.php');

$pic = $_GET['pic'];
$tmp = explode('.', $_GET['pic']);
print_r($tmp);
$pic = str_replace(".jpeg", "", $pic);
$pic = str_replace(".jpg", "", $pic);
$pic = str_replace(".png", "", $pic);
$pic = str_replace(".gif", "", $pic);

if($tmp[1] == 'jpg'){
	$pic = "$pic.jpg";
}else{
	$pic = "$pic.jpeg";
}


// if(is_file($pic)){
// 	$path = $pic;
// }else{
// 	$path = 'nopic.jpg';
// }

// $image = new SimpleImage();
// $image->load($path);
// if(!empty($_GET['w'])){
// 	$image->resizeToWidth($_GET['w']);
// }else if(!empty($_GET['h'])){
// 	$image->resizeToHeight($_GET['h']);
// }


// $image->output();
?>