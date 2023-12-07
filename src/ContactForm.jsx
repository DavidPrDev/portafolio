import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css'

export const ContactForm = () => {
    const initialFormData = {
        nombre: '',
        asunto: '',
        email: '',
        contenido: ''
    };

    const [formData, setFormData] = useState(initialFormData);

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
            setFormData(initialFormData);
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

            // Restablecer los valores del formulario después de enviar
            setFormData(initialFormData);

            // Abrir el modal después de que la solicitud Fetch haya tenido éxito
            handleButtonClick();
        } catch (error) {

            setFormData(initialFormData);
            console.error('Error al enviar el formulario:', error);

        }
    };



    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    const videoRef = useRef(null);

    useEffect(() => {
        // Establecer un tiempo de espera de 1000 ms (1 segundo) antes de reproducir el video
        const timeoutId = setTimeout(() => {
            if (videoRef.current) {

                videoRef.current.play();
            }
        }, 500);

        return () => { clearTimeout(timeoutId); };  // Limpiar el temporizador al desmontar el componente
    });


    return (
        <>
            <div className='container containerForm' id="/contacto">
                <div className='row '>
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                    <div className="col-sm-12 col-md-6">
                        <h2>Contacto</h2>
                        <p>Contacta conmigo a través de este formulario, o enviando un correo a : <b>contacto@david-pr.com</b></p>
                        <form className='formu mt-4' onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="nombre"
                                className="form-control mt-4  inputCustom "
                                placeholder='Nombre:'
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />

                            <br />

                            <input
                                type="text"
                                name="asunto"
                                placeholder='Asunto:'
                                value={formData.asunto}
                                onChange={handleChange}
                                className="inputCustom form-control"
                                required
                            />

                            <br />

                            <input
                                type="email"
                                name="email"
                                placeholder='Email:'
                                value={formData.email}
                                onChange={handleChange}
                                className="inputCustom form-control"
                                required
                            />

                            <br />

                            <textarea
                                name="contenido"
                                value={formData.contenido}
                                placeholder='Contenido:'
                                onChange={handleChange}
                                className="inputCustom form-control"
                                required
                            />

                            <br />
                            <Button type="submit" className="mb-4 btnForm">Enviar</Button>

                        </form>


                        <AnimatePresence>
                            {isVisible && (
                                <motion.div
                                    key="modalOverlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="modalOverlay"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: "-50%" }}
                                        animate={{ opacity: 1, y: "-80%" }}
                                        exit={{ opacity: 0, y: "-50%" }}
                                        transition={{ duration: 0.3, type: "spring", damping: 9, stiffness: 100 }}
                                        className='modalCustom'
                                    >
                                        <div id="logoBackgroun">
                                            <video id="sendEm" ref={videoRef} muted>
                                                <source src="media/email.mp4" type="video/mp4" />
                                                Tu navegador no soporta el tag de video.

                                            </video>
                                        </div>
                                        <div className='row'>
                                            <div className='col colmodal'>
                                                <h5 className='text-center'>Gracias por contactar conmigo.</h5>
                                                <p className='text-center'><b>!Pronto responderé a tu correo!</b></p>

                                                <button className='btn btn-danger btnclose ' onClick={handleButtonClick}>Cerrar</button>

                                            </div>
                                        </div>

                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                </div>
            </div >
        </>
    );
};
