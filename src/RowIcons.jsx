import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { motion } from "framer-motion";
import "./RowIcons.css";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.09 * index
        }
    })
};

export const RowIcons = () => {
    return (
        <>
            <div className="colIcons justify-content-around">
                {[
                    { src: "img/html.png", alt: "logo html", tooltip: "Html" },
                    { src: "img/css.png", alt: "logo css", tooltip: "Css" },
                    { src: "img/javascript.png", alt: "logo javascript", tooltip: "Javascript" },
                    { src: "img/php.png", alt: "logo php", tooltip: "Php" },
                    { src: "img/java.png", alt: "logo java", tooltip: "Java" },
                    { src: "img/php.png", alt: "logo php", tooltip: "Php" },
                    { src: "img/react.png", alt: "logo react", tooltip: "React" },
                    { src: "img/jquery.png", alt: "logo jquery", tooltip: "Jquery" },
                    { src: "img/laravel.png", alt: "logo laravel", tooltip: "Laravel" },
                    { src: "img/bootstrap.png", alt: "logo bootstrap", tooltip: "Bootstrap" },
                    { src: "img/mysql.png", alt: "logo mysql", tooltip: "MYSQL" },
                    { src: "img/github.png", alt: "logo github", tooltip: "Github" },

                ].map((icon, index) => (
                    <OverlayTrigger key={index} placement="top" overlay={<Tooltip>{icon.tooltip}</Tooltip>}>
                        <motion.img className="logoSkills" src={icon.src} alt={icon.alt}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index} />
                    </OverlayTrigger>
                ))}
            </div>
        </>
    );
};
