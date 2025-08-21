<?php
session_start();;
$page_title = "Message envoyé";
$page = 'contact_merci';
$page_style = 'contact_merci';
include('../partials/head.php');
?>


<!DOCTYPE html>
<html lang="fr">

<body>
    <?php include("../partials/global_header.php"); ?>

    <main class="merci-page">
        <section class="merci-section">
            <div class="merci-container">
                <h1>Merci pour votre message ! 👏</h1>
                <p>Nous avons bien reçu votre demande et nous reviendrons vers vous dans les plus brefs délais.</p>
                <button type="submit" class="submit-btn">Retour à l’accueil</button>
            </div>
        </section>
    </main>

    <?php
    include("../partials/footer.php");
    ?>

</body>

</html>