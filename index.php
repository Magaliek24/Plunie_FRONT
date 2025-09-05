<!DOCTYPE html>
<html lang="fr">

<?php

require __DIR__ . '/bootstrap.php';

// $page_title = "Nos modèles";
$page = 'accueil';
$page_style = 'accueil';
include(__DIR__ . '/views/partials/head.php');
?>

<body class="home-page">
    <div class="parallax-container">
        <div class="parallax-image"></div>
    </div>
    <?php
    // $page_title = "Nos modèles";
    include(__DIR__ . '/views/partials/homepage_header.php');
    ?>
    <main id="accueil">
        <section id="hero-header">
            <h1 id="H1-home">Marcher librement, <span class="second-line">grandir naturellement</span></h1>
            <div id="container-button">
                <button id="button-hero-header">Découvrez notre collection</button>
            </div>
        </section>
        <section id="boutique-section">
            <div class="container">
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
            </div>
        </section>
        </div>
        <section id="pourquoi-choisir-plunie">
            <div class="container">
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
            </div>
        </section>
        <section id="pictogrammes">
            <div id="pictos-container">
                <div id="pictos-div">

                    <div class="pictos">
                        <div class="image-picto"><img src="/assets/photos/pictos/toe_box_anatomique.png" alt="Forme anatomique"></div>
                        <h4>Forme anatomique</h4>
                        <p class="picto-description">respectueuse de la forme naturelle
                            du pied</p>
                    </div>

                    <div class="pictos">
                        <div class="image-picto"><img src="/assets/photos/pictos/souplesse.png" alt="Semelle flexible"></div>
                        <h4>Semelle flexible</h4>
                        <p class="picto-description">en longueur et en largeur</p>
                    </div>

                    <div class="pictos">
                        <div class="image-picto"><img src="/assets/photos/pictos/sensation_pieds_nus.png" alt="Sensation pieds nus"></div>
                        <h4>Souples, plates et sans entrave</h4>
                        <p class="picto-description">sans support de voute plantaire ni contrefort rigide</p>
                    </div>

                    <div class="pictos">
                        <div class="image-picto"><img src="/assets/photos/pictos/conception_europeenne.png" alt="Fabrication artisanale"></div>
                        <h4>Fabriquées artisanalement</h4>
                        <p class="picto-description">au Portugal, avec des matériaux européens de qualité</p>
                    </div>

                </div>
                <div id="carrousel-controls">
                    <button aria-label="Précédent" id="prev"><i class="fas fa-angle-left"></i></button>
                    <button aria-label="Suivant" id="next"><i class="fas fa-angle-right"></i></button>
                </div>
                <div id="dots-container"></div>

            </div>

        </section>

    </main>

    <?php include(__DIR__ . '/views/partials/footer.php'); ?>