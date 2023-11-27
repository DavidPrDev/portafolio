import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        asunto: '',
        email: '',
        contenido: ''
    });

    const [csrfToken, setCsrfToken] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const obtenerCsrfToken = async () => {
            try {
                const respuesta = await fetch('generarToken.php');
                const datos = await respuesta.json();
                setCsrfToken(datos.csrf_token);
            } catch (error) {
                console.error('Error al obtener el token CSRF:', error);
            }
        };

        obtenerCsrfToken();

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!csrfToken) {
            console.error('No se pudo obtener el token CSRF. Formulario no enviado.');
            return;
        }

        try {
            const response = await fetch('recibirForm.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken,
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            // Manejar la respuesta del servidor si es necesario
            console.log('Respuesta del servidor:', data);

            // Abrir el modal después de que la solicitud Fetch haya tenido éxito
            setShowModal(true);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='container containerForm'>
                <div className='row '>
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                    <div className="col-sm-12 col-md-6">
                        <h2 >Contacto</h2>
                        <p>Contacta conmigo a través de este formulario, o enviando un correo a contactame@david-pr.com</p>
                        <form className='formu mt-4' onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="nombre"
                                className="form-control mt-4  inputCustom "
                                placeholder='Nombre:'
                                value={formData.nombre}
                                onChange={handleChange}
                            />

                            <br />

                            <input
                                type="text"
                                name="asunto"
                                placeholder='Asunto:'
                                value={formData.asunto}
                                onChange={handleChange}
                                className="inputCustom form-control"
                            />

                            <br />

                            <input
                                type="email"
                                name="email"
                                placeholder='Email:'
                                value={formData.email}
                                onChange={handleChange}
                                className="inputCustom form-control"
                            />

                            <br />

                            <textarea
                                name="contenido"
                                value={formData.contenido}
                                placeholder='Contenido:'
                                onChange={handleChange}
                                className="inputCustom form-control"
                            />

                            <br />
                            <Button type="submit" className="mb-4 btnForm">Enviar</Button>

                        </form>
                    </div>
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                </div>
            </div>

            {/* Modal de Bootstrap */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Solicitud Fetch completada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Puedes personalizar el contenido del modal aquí.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
