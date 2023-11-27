import React, { useState, useEffect } from 'react';

export const GeToken = () => {
    const [csrfToken, setCsrfToken] = useState(null);

    useEffect(() => {
        const obtenerCsrfToken = async () => {
            try {
                const respuesta = await fetch('http://192.168.0.27:80/generarToken.php');
                const datos = await respuesta.json();

                setCsrfToken(datos.csrf_token);
            } catch (error) {
                console.error('Error al obtener el token CSRF:', error);
            }
        };

        obtenerCsrfToken();

    }, []);

    return (
        <>
            {csrfToken && (
                <>
                    {csrfToken}
                </>
            )}
        </>
    );
};
