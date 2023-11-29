import './RowcontainerHeader.css'
import { Icons } from './Icons'
import { motion } from "framer-motion";
const fadeInLeft = {
    initial: {
        opacity: 0,
        x: "-50%",

    },
    animate: {
        opacity: 1,
        x: "0%",

        transition: {

            delay: 1.7,
            duration: 0.5,
            type: "spring",
            damping: 11,
            stiffness: 100,
        }
    }
};
const fadeInUp = {
    initial: {
        opacity: 0,
        y: "-50%",

    },
    animate: {
        opacity: 1,
        y: "0%",

        transition: {

            delay: 2.5,
            duration: 0.5,
            type: "spring",
            damping: 11,
            stiffness: 100,
        }
    }
};
export const RowcontainerHeader = ({
    titulo, subtitulo = null, content,
    center = false, customClass = null,
    withIcons = false, customClassContainer = null }) => {

    const subtitl = subtitulo == null ? "" : <h5 className='subtitle'>{subtitulo}</h5>;
    const classCenter = center == false ? "" : "text-center";
    const custClass = customClass == null ? "" : `${customClass}`;
    const clasContainer = customClassContainer == null ? "" : `${customClassContainer}`;
    const icons = withIcons ? <Icons /> : "";
    return (
        <>
            <div className={`container ${clasContainer}`} >
                <div className={`row ${classCenter} ${custClass}`}>
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                    <motion.div
                        className="col-md-3 col-6 "
                        variants={fadeInLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >

                        <h1>{titulo}</h1>
                        {subtitl}
                        <div>
                            {content}
                        </div>

                        {icons}
                    </motion.div>
                    <motion.div
                        className="col-dm-3 col-6 "
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}>
                        <video id="videoPlayer" autoPlay muted>
                            <source src="media/headVideo.mp4" type="video/mp4" />
                            Tu navegador no soporta el tag de video.

                        </video>
                    </motion.div>
                    <div className="col-dm-3 d-dm-block d-sm-none"></div>
                </div>
            </div>
        </>
    )
}

