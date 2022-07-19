<?php
$do = $_GET["do"];
$status = "failed";
$pesan = "";
$daJson = array();

if($do == "getdata"){

} else {
  $pesan = "Sorry! no action detected!";
}

$daJson["message"] = $pesan;
$daJson["status"] = $status;
$printJson = json_encode($daJson);
echo $printJson;
exit();
?>
