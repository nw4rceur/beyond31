<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Récupérer les champs du formulaire
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $subject = htmlspecialchars($_POST["subject"]);
  $message = htmlspecialchars($_POST["message"]);

  // Destinataire du mail
  $to = "contact@beyond31.fr"; // ← remplace par ton adresse email

  // Sujet de l’email
  $email_subject = "Nouveau message : $subject";

  // Corps de l’email
  $email_body = "Vous avez reçu un nouveau message de $name.\n\n".
      "Email : $email\n\n".
      "Message :\n$message";

  // En-têtes de l’email
  $headers = "From: $email";

  // Envoi de l’email
  if (mail($to, $email_subject, $email_body, $headers)) {
    http_response_code(200); // succès
  } else {
    http_response_code(500); // erreur
  }
} else {
  http_response_code(403); // mauvaise méthode
}
?>
