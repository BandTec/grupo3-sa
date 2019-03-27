<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "vortexgamedevs@gmail.com"; // Add your email address inbetween the "" replacing yourname@gmail.com - This is where the form will send a message to.
$subject = "Nova mensagem de $name";
$body = "Você Recebeu uma nova mensagem do site Digital Time.\n\n"."E aqui vão os detalhes:\n\nNome: $name\n\nEmail: $email\n\nPhone: $phone\n\nMensagem:\n$message";
$header = "De: noreply@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@gmail.com.
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
