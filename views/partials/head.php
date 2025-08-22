<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta
        name="description"
        content="Site de vente en ligne de chaussures barefoot pour enfants">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= isset($page_title) ? htmlspecialchars($page_title) : "Plunie" ?>">
    <meta property="og:image" content="/assets/photos/plunie_chaussures_barefoot.webp">
    <meta property="og:description" content="Vente en ligne de chaussures barefoot pour enfants">
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Plunie" />
    <meta property="og:site_name" content="Plunie" />
    <meta property="og:locale" content="fr_FR" />
    <link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/assets/favicons/favicon.svg" />
    <link rel="shortcut icon" href="/assets/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Plunie" />
    <link rel="manifest" href="/assets/favicons/site.webmanifest" />

    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <script type="module" src="/assets/js/main.js"></script>

    <?php if (isset($page) && $page === 'accueil'): ?>
        <link rel="stylesheet" href="/assets/style/style_accueil.css" />
    <?php else: ?>
        <!-- Pour toutes les autres pages -->
        <link rel="stylesheet" href="/assets/style/style_global.css" />
        <?php if (isset($page_style)): ?>
            <link rel="stylesheet" href="/assets/style/pages/<?= htmlspecialchars($page_style) ?>.css" />
        <?php endif; ?>
    <?php endif; ?>
    <title>
        <?= isset($page_title) ? htmlspecialchars($page_title) . " - Plunie" : "Plunie"; ?>
    </title>
</head>