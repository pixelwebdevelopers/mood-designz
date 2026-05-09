<?php
/* Change this email before production use. */
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Location: ../../contact.html');
        exit;
    }

    $recipient = 'your-email@example.com'; // Replace with your real receiving email address.
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? 'Website Inquiry');
    $message = trim($_POST['message'] ?? '');

    if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: ../../contact.html?status=invalid');
        exit;
    }

    $safeSubject = preg_replace('/[
]+/', ' ', $subject);
    $body = "Name: {$name}
Email: {$email}
Subject: {$safeSubject}

Message:
{$message}";
    $headers = [
        'From: ' . $name . ' <' . $email . '>',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion(),
    ];

    $sent = @mail($recipient, $safeSubject ?: 'Website Inquiry', $body, implode("
", $headers));
    $status = $sent ? 'success' : 'error';
    header('Location: ../../contact.html?status=' . $status);
    exit;
    ?>
