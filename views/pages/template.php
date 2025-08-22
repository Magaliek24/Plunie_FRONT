<?php
session_start();

$page_title = "Titre de la page";
$page = 'produits'; // identifiant unique de la page
$page_style = "produits"; // nom du fichier CSS spécifique
$page_slug = "produits"; // classe appliquée au body
$hero_image = '/assets/photos/banniere_default.webp';
$hero_title = 'Notre Collection';
$hero_subtitle = "Découvrez nos modèles de chaussures barefoot";
$hero_position = 'center center';

include __DIR__ . '/../partials/head.php';
?>

<!DOCTYPE html>
<html lang="fr">

<body class="page <?= htmlspecialchars($page_slug) ?>">
    <?php include __DIR__ . '/../partials/global_header.php'; ?>
    <?php include __DIR__ . '/../partials/global_hero.php'; ?>

    <main id="page">
        <section class="container-intro">
            <p>Contenu spécifique à la page <?= htmlspecialchars($page_title) ?>.</p>
        </section>

        <section class="container">
            <!-- Contenu principal -->
        </section>
    </main>

    <?php include __DIR__ . '/../partials/footer.php'; ?>
</body>

</html>