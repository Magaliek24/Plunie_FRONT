<?php

declare(strict_types=1);

require dirname(__DIR__, 2) . '/bootstrap.php';

$page_title = "Contact";
$page = 'contact';
$page_style = "contact";
$page_slug = "contact";
$hero_image  = '/assets/photos/banniere_plunie_contact.webp';
$hero_title  = 'Besoin d’aide ?';
$hero_subtitle = "Nous vous répondrons dans les meilleurs délais.";
$hero_position = 'center bottom';

// URL absolue de l’endpoint back 
$BACK_BASE = 'http://localhost:8090';
$CONTACT_ACTION = $BACK_BASE . '/contact/send';

include __DIR__ . '/../partials/head.php';

?>

<!DOCTYPE html>
<html lang="fr">

<body class="page <?= escape($page_slug) ?>">
    <?php include __DIR__ . '/../partials/global_header.php'; ?>
    <?php include __DIR__ . '/../partials/global_hero.php'; ?>

    <main id="page" class="container">
        <section class="intro">
            <p>Pour toute question, n’hésitez pas à nous envoyer un message via le formulaire ci-dessous. Vous pouvez également nous écrire directement à l’adresse suivante : <a href="mailto:contact@plunie.fr">contact@plunie.fr</a>. <br>Nous vous répondrons dans les plus brefs délais.</p>
        </section>

        <form action="<?= escape($CONTACT_ACTION) ?>" method="POST">
            <input type="hidden" name="csrf_token" id="csrf_token" value="">
            <div class="name-fields">
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" id="prenom" required maxlength="80" />
                </div>
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input type="text" name="nom" id="nom" required maxlength="80" />
                </div>
            </div>
            <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" name="email" id="email" required maxlength="80" />
            </div>
            <div class="form-group">
                <label for="message">Votre message</label>
                <textarea name="message" id="message" required maxlength="4000"></textarea>
            </div>
            <div class="honeypot" aria-hidden="true">
                <label for="website">Ne pas remplir ce champ</label>
                <input type="text" name="website" id="website" tabindex="-1" autocomplete="off" />
            </div>
            <input type="hidden" name="recaptcha_response" id="recaptcha_response">
            <button type="submit" class="submit-btn">Envoyer</button>
            <noscript style="color:#b00;margin-top:.75rem;display:block">
                JavaScript est requis pour envoyer ce formulaire (chargement du jeton CSRF).
            </noscript>
        </form>
    </main>
    <?php include __DIR__ . '/../partials/footer.php'; ?>
    <script>
        // Configure l’URL du back pour fetchData.js
        window.API_BASE = "<?= escape($BACK_BASE) ?>";
    </script>
    <script type="module">
        import {
            get_json
        } from "/assets/js/lib/fetchData.js";

        (async () => {
            try {
                // important: credentials:"include" pour envoyer/recevoir le cookie de session du back
                const r = await get_json("/api/csrf", {
                    credentials: "include"
                });
                const input = document.getElementById("csrf_token");
                if (input) input.value = r.csrf;
            } catch (e) {
                console.error("CSRF fetch error:", e);
            }
        })();
    </script>


</body>

</html>