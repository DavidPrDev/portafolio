import './ProjectPill.css'
import { VideoHover } from './VideoHover'


export const ProjectPill = ({ title, content, srcVideo, srcImage, hrefLink, video, icons }) => {
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
                </div>

                <div className="col-md-5 col-sm-12 mt-3 txtContent">
                    <h5>{title}</h5>
                    <p >{content}</p>
                    <div className="row">
                        <div className="col ">
                            {images}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

