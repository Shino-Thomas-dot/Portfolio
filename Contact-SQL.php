<?php
$servername = "localhost";
$username = "root";
$password = "";
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


<?php
use PHPMailer\PHPMailer\PHPMailer; //import kr raha hai
use PHPMailer\PHPMailer\Exception; // along with exceptions

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php'; // Autoload PHPMailer classes
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];   // Get the email from the form


    $mail = new PHPMailer(true); // ek naya instance create kiya jo PHPmailer mein hai

    try {
        // Server settings
        $mail->isSMTP();                                 // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';          // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                       // Enable SMTP authentication
        $mail->Username   = 'shinothomas17@gmail.com';     // Your email address (Gmail)
        $mail->Password   = 'rsdvoabipibysngn';      // Your App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption for secure tranmission of the mail
        $mail->Port       = 587;                        //Port 25: Used for sending emails but often blocked by ISPs to reduce spam.
        //Port 587: Recommended for email submission, supporting STARTTLS.
        //Port 465: Used for SMTP over SSL (Secure Sockets Layer).
        // Recipients
        $mail->setFrom('shinothomas17@gmail.com', 'Shino Thomas'); // Sender's email and name
        $mail->addAddress($email);                         // Add a recipient (the email entered by the user)

        // Content
        $mail->isHTML(true);                               // Set email format to HTML
        $mail->Subject = 'Meeting Request Received -Shino Thomas';      // Subject of the email
        $mail->Body    = 'We have received your request for a meeting. We will get back to you soon. Have a nice day!'; // Email body content

        $mail->send();                                     // Send the email
        echo 'Meeting request sent successfully!';        // Success message
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; // Error message if sending fails
    }
}else {
    echo "Invalid request.";                             // Message for invalid request
}
?>

