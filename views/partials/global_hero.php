<?php
$img   = $hero_image   ?? '/assets/photos/hero-default.webp';
$title = $hero_title   ?? ($page_title ?? '');
$subtitle   = $hero_subtitle ?? '';
$position   = $hero_position     ?? 'center 70%';
?>
<section class="global-hero" style="--hero-img: url('<?= escape($img) ?>'); --hero-position: <?= escape($position) ?>;">
    <div class="container-hero">
        <?php if ($title): ?>
            <h1 class="hero-title"><?= escape($title) ?></h1>
        <?php endif; ?>
        <?php if ($subtitle): ?>
            <p class="hero-subtitle"><?= escape($subtitle) ?></p>
        <?php endif; ?>
    </div>
</section>