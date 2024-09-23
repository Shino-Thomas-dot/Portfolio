<?php
$servername = "localhost:3307";
$username = "root";
$password = "shino";
$dbname = "portfolio_db";
$port="3307";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Check connection
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    // Uncomment this line if you want to confirm connection during testing
    // echo "Database connected successfully";
}

// Collect form data
$name = $_POST['name'];
$email = $_POST['email'];
$date = $_POST['date'];
$time = $_POST['time'];
$message = $_POST['message'];

// You can choose to save the email, date, and time in the database

$psmt = $conn->prepare("INSERT INTO contact_form (name, email, preferred_date, preferred_time, message) VALUES (?, ?, ?, ?, ?)");
$psmt->bind_param("sssss", $name, $email, $date, $time, $message);

if ($psmt->execute()) {
    echo "New meeting request created successfully.";
} else {
    echo "Error: " . $psmt->error;
}

$psmt->close();
$conn->close();
?>

