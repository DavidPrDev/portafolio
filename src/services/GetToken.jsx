
export const GetToken = async () => {

    try {
        const respuesta = await fetch('generarToken.php');
        const datos = await respuesta.json();
        return datos.csrf_token;
    } catch (error) {
        console.error('Error al obtener el token CSRF:', error);
        throw error;
    }

};
