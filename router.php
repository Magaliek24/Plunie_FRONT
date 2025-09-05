<?php

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '/';
$file = __DIR__ . $path;
if ($path !== '/' && is_file($file)) {
    return false;
}
// Si un .php existe, on le charge 
if ($path !== '/' && is_file($file . '.php')) {
    require $file . '.php';
    exit;
}
$_SERVER['SCRIPT_NAME'] = '/index.php';
require __DIR__ . '/index.php';
