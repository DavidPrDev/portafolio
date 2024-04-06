import '../styles/ProjectPill.css'
import { VideoHover } from './VideoHover'
import { Github } from 'react-bootstrap-icons';

export const ProjectPill = ({ title, content, srcVideo, srcImage, hrefLink, video, icons, urlGithub }) => {
    const condicionVideo = video == true ?
        <VideoHover
            srcVideo={srcVideo}
            srcImage={srcImage}
            hrefLink={hrefLink} /> : <VideoHover

            srcImage={srcImage}
            hrefLink={hrefLink} />;

    let images = [];
    for (let i = 0; i < icons.length; i++) {
        images.push(<img key={`icon-${i}`} className='imgSb' src={icons[i]} alt={`Icon ${i}`} />);
    }

    return (
        <>
            <div className="row pillRow mt-5">
                <div className="col-md-7 col-sm-12 tal">
                    {condicionVideo}
                    <div className='row '>
                        <div className='col '><a className='linkContainer' href={urlGithub}>Visita  en Github <Github /></a></div>
                    </div>
                </div>

                <div className="col-md-5 col-sm-12 mt-3 txtContent">
                    <h5>{title}</h5>
                    <p >{content}</p>
                    <div className="row">
                        <div className="col containerIcons">
                            {images}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

