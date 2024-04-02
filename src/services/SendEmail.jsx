export const SendEmail = async (csrfToken, formData) => {

    try {
        const response = await fetch('recibirForm.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
            },
            body: JSON.stringify(formData),
        });

        const datos = await response.json();
        if (datos.mensaje == "OK") {
            return "OK";
        }
    } catch (error) {
        console.error('Error al enviar:', error);
    }

};
