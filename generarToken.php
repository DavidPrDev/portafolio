<?php
// Inicia la sesión
session_start();
header('Access-Control-Allow-Origin: *'); // o tu dominio específico
header('Content-Type: application/json');

/* 
// Verifica si el origen de la solicitud es el dominio permitido
$allowedDomain = 'https://tu-dominio-permitido.com';
$referer = $_SERVER['HTTP_REFERER'] ?? '';

if (strpos($referer, $allowedDomain) !== 0) {
    http_response_code(403); // Prohibido
    exit('Acceso prohibido');
}
 */
// Genera un token CSRF
$csrfToken = bin2hex(random_bytes(32)); // Puedes ajustar la longitud según tus necesidades

// Guarda el token en la sesión
$_SESSION['csrf_token'] = $csrfToken;

// Devuelve el token como respuesta JSON

echo json_encode(['csrf_token' => $csrfToken]);
