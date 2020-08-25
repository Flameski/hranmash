<?php
 
if($_POST) {
    $email_title = "";
    $visitor_message = "";
    $salutation = "";
    $firstName = "";
    $lastName = "";
    $position = "";
    $company = "";
    $division = "";
    $country = "";
    $phone = "";
    $mobilePhone = "";
    $email = "";
    $recipient = "info@hranmash-bg.com";

    if(isset($_POST['salutation'])) {
        $salutation = filter_var($_POST['salutation']);
    }

    if($salutation == "mr") {
        $salutation = "г-н";
    } else if ($salutation == "mrs") {
        $salutation = "г-жа";
    }

    if(isset($_POST['firstName'])) {
        $firstName = filter_var($_POST['firstName'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['lastName'])) {
        $lastName = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['position'])) {
        $position = filter_var($_POST['position'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['company'])) {
        $company = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['division'])) {
        $division = filter_var($_POST['division'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['country'])) {
        $country = filter_var($_POST['country'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['phone'])) {
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['mobilePhone'])) {
        $mobilePhone = filter_var($_POST['mobilePhone'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['email_title'])) {
        $email_title = filter_var($_POST['email_title'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }

    $visitor_message = $visitor_message . "<br><br><hr>\r\n"
    . '<b>От:</b> ' . $salutation . " " . $firstName . " " . $lastName . "<br>\r\n"
    . '<b>Длъжност:</b> ' . $position . "<br>\r\n"
    . '<b>Компания:</b> ' . $company .  "<br>\r\n"
    . '<b>Отдел:</b> ' . $division .  "<br>\r\n"
    . '<b>Държава:</b> ' . $country .  "<br>\r\n"
    . '<b>Телефон:</b> ' . $phone .  "<br>\r\n"
    . '<b>Мобилен телефон:</b> ' . $mobilePhone .  "\r\n";

     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
     
    if(mail($recipient, $email_title, $visitor_message, $headers)) {
        // echo "<p>Благодарим ви, че се свързахте с нас, $salutation $lastName. Ще се свържем с вас скоро.</p>";
        readfile("thankyou.html");
    } else {
        echo '<p>Message was not sent Please try again.</p>';
    }
     
} else {
    echo '<p>Something went wrong.</p>';
}
 
?>