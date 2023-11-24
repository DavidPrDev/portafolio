import './RowcontainerHeader.css'
import { Icons } from './Icons'


export const RowcontainerHeader = ({
    titulo, subtitulo = null, content,
    center = false, customClass = null,
    withIcons = false, customClassContainer = null }) => {

    const subtitl = subtitulo == null ? "" : <h4 className='subtitle'>{subtitulo}</h4>;
    const classCenter = center == false ? "" : "text-center";
    const custClass = customClass == null ? "" : `${customClass}`;
    const clasContainer = customClassContainer == null ? "" : `${customClassContainer}`;
    const icons = withIcons ? <Icons /> : "";
    return (
        <>
            <div className={`container ${clasContainer}`}>
                <div className={`row ${classCenter} ${custClass}`}>
                    <div className="col-sm-3 d-sm-block d-none"></div>
                    <div className="col-sm-3 col-6 ">

                        <h1>{titulo}</h1>
                        {subtitl}
                        <div>
                            {content}
                        </div>

                        {icons}
                    </div>
                    <div className="col-sm-3 col-6 ">
                        <video id="videoPlayer" autoPlay muted>
                            <source src="media/headVideo.mp4" type="video/mp4" />
                            Tu navegador no soporta el tag de video.

                        </video>
                    </div>
                    <div className="col-sm-3 d-sm-block d-none"></div>
                </div>
            </div>
        </>
    )
}

