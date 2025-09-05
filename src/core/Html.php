<?php

declare(strict_types=1);

if (!function_exists('e')) {
    function e(string $s): string
    {
        return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }
}
if (!function_exists('escape')) {
    // alias temporaire s'il y a déjà du code qui appelle escape()
    function escape(string $s): string
    {
        return e($s);
    }
}
