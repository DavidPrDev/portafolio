import './Rownav.css'
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const fadeInUpNav = {
    initial: {
        opacity: 0,
        y: "-50%",

    },
    animate: {
        opacity: 1,
        y: "0%",

        transition: {
            delay: 3,
            duration: 1,
        }
    }
};
export const Rownav = ({ }) => {

    return (
        <>
            <motion.nav
                className="navbar navbar-expand-md navbar-dark  fixed-top"
                variants={fadeInUpNav}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    spy={true}
                                    smooth={false}
                                    offset={-75}
                                    duration={700}
                                    className="nav-link"
                                    to="/sobre-mi"
                                >Sobre mi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    spy={true}
                                    smooth={false}
                                    offset={-75}
                                    duration={700}
                                    className="nav-link"
                                    to="/tecnologias">Tecnologías</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    spy={true}
                                    smooth={false}
                                    offset={-75}
                                    duration={700}
                                    className="nav-link"
                                    to="/proyectos">Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    spy={true}
                                    smooth={false}
                                    offset={-75}
                                    duration={700}
                                    className="nav-link"
                                    to="/contacto">Contactame</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Descargar Cv</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.nav >


        </>
    )
}