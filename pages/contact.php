<!DOCTYPE html>
<html lang="fr">

<?php
$page_title = "Contact";
$page = 'contact';
include('../partials/head.php');
require_once '../../back/includes/security.php';
$csrf_token = generate_csrf_token();
?>

<body>
    <?php include("../partials/header.php"); ?>
    <section class="hero">
        <h1>Besoin d'aide ?</h1>
    </section>

    <main class="container">
        <section class="intro">
            <p>Pour toute question, n’hésitez pas à nous envoyer un message via le formulaire ci-dessous. Vous pouvez également nous écrire directement à l’adresse suivante : <a href="mailto:contact@plunie.fr">contact@plunie.fr</a>. <br>Nous vous répondrons dans les plus brefs délais.</p>
        </section>

        <form action="/back/handlers/sendmail.php" method="POST">
            <input type="hidden" name="csrf_token" value="<?= $csrf_token ?>">
            <div class="name-fields">
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" id="prenom" required />
                </div>
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" name="nom" id="nom" required />
                </div>
            </div>
            <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="message">Votre message</label>
                <textarea name="message" id="message" required></textarea>
            </div>
            <div class="honeypot">
                <label for="website">Ne pas remplir ce champ</label>
                <input type="text" name="website" id="website" tabindex="-1" autocomplete="off" />
            </div>
            <input type="hidden" name="recaptcha_response" id="recaptcha_response">
            <button type="submit" class="submit-btn">Envoyer</button>
        </form>
    </main>

</body>

</html>