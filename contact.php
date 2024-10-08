<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: text/html; charset=UTF-8");

include '/var/www/config.php';

// connection
$conn = mysqli_connect($svname, $user, $pass, $dbname);

// check connection
if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
// instruction prepare permet de préparer la requête
    $stmt = $conn->prepare("INSERT INTO contact (name, email, society, message) VALUES (?, ?, ?, ?)");

// bind_param permet de lier les paramètres à la requête, ssss signifie que les paramètres sont de type string
    $stmt->bind_param("ssss", $name, $email, $society, $message);

// récupération des données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $society = $_POST['society'];
    $message = $_POST['message'];

// exécution de la requête
    if (!$stmt->execute()) {
        die("Erreur d'exécution de la requête: " . $stmt->error);
    }

    echo "Nouvel enregistrement créé avec succès";

// fermeture de la requête
    $stmt->close();
}
$conn->close();

