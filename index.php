<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta
        name="description"
        content="Site de vente en ligne de chaussures barefoot pour enfants">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Plunie">
    <meta property="og:image" content="./assets/photos/plunie_chaussures_barefoot.jpg">
    <meta property="og:description" content="Vente en ligne de chaussures barefoot pour enfants">
    <script type="module" src="/assets/js/main.js"></script>
    <link rel="stylesheet" href="/assets/style/style.css">

    <link
        rel="icon"
        type="image/png"
        href="./assets/favicons/favicon-96x96.png"
        sizes="96x96">
    <link
        rel="icon"
        type="image/svg+xml"
        href="./assets/favicons/favicon.svg">
    <link
        rel="shortcut icon"
        href="./assets/favicons/favicon.ico">
    <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./assets/favicons/apple-touch-icon.png">
    <link
        rel="manifest"
        href="./assets/favicons/site.webmanifest">


    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />

    <title>
        Plunie
    </title>
</head>

<body>
    <header id="homepage-header">

        <nav id="homepage-nav">

            <div id="logo">
                <a href="/index.php">
                    <img
                        src="/assets/photos/Logo.png"
                        alt="logo de Plunie composé d_une lune et
            d_une plume" />
                </a>
            </div>
            <div id="nav">
                <ul id="nav-links">
                    <li><a href="/pages/boutique.php">Nos modèles</a></li>
                    <li><a href="/pages/quelle_taille_choisir.php">Quelle taille choisir ?</a></li>
                    <li><a href="/pages/a_propos.php">A propos de nous</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div id="id-toggle-nav">
                <i id="toggle-nav" class="fas fa-bars"></i>
            </div>
        </nav>
    </header>
    <main id="accueil">
        <section id="hero-header">
            <h1 id="H1-home">Des chaussures souples pour favoriser le bon développement des tout-petits et des plus grands</h1>
            <div id="container">
                <button id="button-hero-header">Découvrez notre collection</button>
            </div>
        </section>
        <section id="boutique-section">
            <h2>Nos Essentiels</h2>
            <div id="products-grid">

                <div class="product-card">
                    <img src="./assets/photos/boots_corail/Boots_plunie_corail.jpg" alt="Boots Sirius">
                    <h3>Boots Sirius</h3>
                    <p class="color">Corail</p>
                    <p class="price">69.00 €</p>
                </div>

                <div class="product-card">
                    <img src="./assets/photos/chelsea_cognac/Chelsea_cognac_plunie.jpg" alt="Chelsea Arae">
                    <h3>Chelsea Arae</h3>
                    <p class="color">Cognac</p>
                    <p class="price">69.00 €</p>
                </div>

                <div class="product-card">
                    <img src="./assets/photos/plunie_semelles_reversibles.jpeg" alt="Semelles cuir/feutre">
                    <h3>Semelles réversibles cuir/feutre</h3>
                    <p class="color invisible">-</p>
                    <p class="price">5.00 €</p>
                </div>

            </div>

        </section>
        <section id="pourquoi-choisir-plunie">
            <div id="texte-pourquoi">
                <h2>Pourquoi choisir Plunie ?</h2>
                <ul>
                    <li><strong>Souplesse et liberté de mouvement : </strong>chaussures souples pour permettre une bonne liberté de mouvement et laisser le pied se développer le plus naturellement possible</li>
                    <li><strong>Semelle flexible : </strong>en longueur et en largeur pour un mouvement fluide et naturel du pied</li>
                    <li><strong>Forme anatomique : </strong>large boîte à orteils (« toe box ») respectant la forme naturelle du pied pour un ajustement sans entrave</li>
                    <li><strong>Semelle intérieure amovible et réversible : </strong>avec un côté en cuir et un côté en feutre, pour les journées plus fraîches</li>
                    <li><strong>Sans support de voûte plantaire : </strong>pour permettre au pied de se muscler librement</li>
                    <li><strong>Semelle plate : </strong>sans dénivelé pour une posture physiologique, la plus naturelle possible</li>
                    <li><strong>Pour marcheurs débutants et confirmés</strong></li>
                    <li><strong>Cuir de vache italien tanné végétalement : </strong>respectueux de l’environnement et doux pour la peau</li>
                    <li><strong>Adaptées aux pieds moyens et fins</strong></li>
                </ul>
            </div>
            <div id="image-pourquoi">
                <img src="./assets/photos/pourquoi_choisir_plunie.jpg" alt="Chelsea cognac et boots marine">
            </div>

        </section>
        <!-- <section id="pictogrammes">Pictogrammes</section> -->

    </main>

    <?php include("./partials/footer.php"); ?>