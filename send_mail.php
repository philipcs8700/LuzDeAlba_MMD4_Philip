<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name    = strip_tags($_POST['name']);
    $email   = strip_tags($_POST['email']);
    $message = strip_tags($_POST['message']);

    $to      = "hello@philipcreamer.com";
    $subject = "Ny kontaktformular-besked fra $name";
    
    $body = "
Du har modtaget en ny besked via kontaktformularen:

Navn: $name
Email: $email

Besked:
$message
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Tak! Din besked er sendt.";
    } else {
        echo "Der opstod en fejl — prøv igen.";
    }
}
?>
