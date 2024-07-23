<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $place = isset($_POST['place']) ? trim($_POST['place']) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    // Validate form fields
    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($place)) {
        $errors[] = 'Nevím kam to mám doručit, brácho';
    }

    if (empty($message)) {
        $errors[] = '';
    }

    // If no errors, send email
    if (empty($errors)) {
        // Recipient email address (replace with your own)
        $recipient = "jan.naprstek@kcentrum.eu";

        // Additional headers
        $headers = "From: $name <$email>";

        // Send email
        if (mail($recipient, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // Display errors
        echo "The form contains the following errors:<br>";
        foreach ($errors as $error) {
            echo "- $error<br>";
        }
    }
} else {
    // Not a POST request, display a 403 forbidden error
    header("HTTP/1.1 403 Forbidden");
    echo "You are not allowed to access this page.";
}
?>