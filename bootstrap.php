<?php

declare(strict_types=1);

if (!defined('FRONT_BOOTSTRAPPED')) {
    define('FRONT_BOOTSTRAPPED', true);

    error_reporting(E_ALL);
    ini_set('display_errors', '1'); // pour voir l’erreur au lieu d’un écran blanc

    define('FRONT_ROOT', __DIR__);
    define('VIEW_PATH', FRONT_ROOT . '/views');
    define('PARTIALS_PATH', VIEW_PATH . '/partials');

    require_once FRONT_ROOT . '/src/core/Html.php';
}
