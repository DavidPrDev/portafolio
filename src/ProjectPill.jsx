import './ProjectPill.css'
import { VideoHover } from './VideoHover'
export const ProjectPill = ({ title, content, srcVideo, srcImage, hrefLink }) => {

    return (
        <>
            <div className="row pillRow mt-5">
                <div className="col-md-7 col-sm-12 tal">
                    <VideoHover
                        srcVideo={srcVideo}
                        srcImage={srcImage}
                        hrefLink={hrefLink} />
                </div>

                <div className="col-md-5 col-sm-12 mt-3 txtContent">
                    <h5>{title}</h5>
                    <p >{content}</p>
                </div>
            </div>

        </>
    )
}

