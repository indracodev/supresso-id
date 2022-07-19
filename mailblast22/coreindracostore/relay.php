<?php
require('PHPMailer/PHPMailer.php');
require('PHPMailer/SMTP.php');
require('PHPMailer/Exception.php');
echo "========================<br>";
echo "Indraco Mailsender v.2.0<br>";
echo "========================<br>";
$pesan = "";
include "config.php";
$getMailList = $conn->query("SELECT * FROM mailblastindrstore WHERE status = 'Unsend' AND subscribe = 'subscribe' LIMIT 1 ");
$countMailList = $getMailList->num_rows;
if($countMailList != 0){
  $fetchMailList = $getMailList->fetch_assoc();
  $memberID = $fetchMailList["id"];
  $memberEmail = $fetchMailList["email"];
  $memberNama = $fetchMailList["name"];
  $memberStatus = $fetchMailList["status"];
  echo "Email : ".$memberEmail."<br>";
  echo "Name : ".$memberNama."<br>";
  if($memberEmail == ""){
    $pesan = "Skipping! email is empty!";
  } else if($memberStatus != "Unsend"){
    $pesan = "Skipping! status not unsend";
  } else {
    $conn->query("UPDATE mailblastindrstore SET status = 'Failed' WHERE id = '".$memberID."' ");
    $lastMemberID = substr($memberID, -1);
    if($lastMemberID == "1" || $lastMemberID == "6"){
      $relayHost = "mail.indracostore.com";
      $relayUname = "no-reply01@indracostore.com";
      $relayPassword = "(.=)reLaY01-inrStore_+";
      $relayPort = "465";
      $relaySenderAs = "no-reply@indracostore.com";
      $relaySenderName = "Indracostore Newsletter";
    } else if($lastMemberID == "2" || $lastMemberID == "7"){
      $relayHost = "mail.indracostore.com";
      $relayUname = "no-reply02@indracostore.com";
      $relayPassword = "(.=)reLaY02-inrStore_+";
      $relayPort = "465";
      $relaySenderAs = "no-reply@indracostore.com";
      $relaySenderName = "Indracostore Newsletter";
    } else if($lastMemberID == "3" || $lastMemberID == "8"){
      $relayHost = "mail.indracostore.com";
      $relayUname = "no-reply03@indracostore.com";
      $relayPassword = "(.=)reLaY03-inrStore_+";
      $relayPort = "465";
      $relaySenderAs = "no-reply@indracostore.com";
      $relaySenderName = "Indracostore Newsletter";
    } else if($lastMemberID == "4" || $lastMemberID == "9"){
      $relayHost = "mail.indracostore.com";
      $relayUname = "no-reply04@indracostore.com";
      $relayPassword = "(.=)reLaY04-inrStore_+";
      $relayPort = "465";
      $relaySenderAs = "no-reply@indracostore.com";
      $relaySenderName = "Indracostore Newsletter";
    } else {
      $relayHost = "mail.indracostore.com";
      $relayUname = "no-reply05@indracostore.com";
      $relayPassword = "(.=)reLaY05-inrStore_+";
      $relayPort = "465";
      $relaySenderAs = "no-reply@indracostore.com";
      $relaySenderName = "Indracostore Newsletter";
    }
    echo "Relay Name : ".$relayUname."<br>";
    include "content.php";
    echo "===============================<br>";
    echo "Begin Sending Email<br>";
    echo "===============================<br>";
    try{
      $mail = new PHPMailer\PHPMailer\PHPMailer();
      $mail->isSMTP();
      $mail->Host     = $relayHost;
      $mail->SMTPAuth = true;
      $mail->Username = $relayUname;
      $mail->Password = $relayPassword;
      $mail->SMTPSecure = 'ssl';
      $mail->Port     = $relayPort;
      $mail->setFrom($relaySenderAs, $relaySenderName);
      $mail->addAddress($memberEmail, $memberNama);
      //$mail->addBcc('aldy.indraco@gmail.com', 'ok');
      //$mail->addAttachment('./pdfs/'.$filename);
      $mail->isHTML(true);
      $mail->Subject = $contentSubject;
      $mail->Body    = $contentHTML;
      $mail->AltBody = 'Sorry, cannot show this page. Your email client is not supported a HTML format';
      sleep(7);
      //$mail->send();
      $conn->query("UPDATE mailblastindrstore SET status = 'Standby' WHERE id = '".$memberID."' ");
      echo "Email Delivered!<br>";
      echo "Redirecting<br>";
      header("location:relay.php");
      exit();
    } catch(e){
      $pesan = "There was an error sending to : ".$memberEmail." | error : ".$e;
    }
  }
} else {
  header("location:complete.php");
  exit();
}
echo $pesan;
exit();
?>
