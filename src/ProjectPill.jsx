import './ProjectPill.css'
import { VideoHover } from './VideoHover'
export const ProjectPill = ({ title, content, srcVideo, srcImage, hrefLink }) => {

    return (
        <>
            <div className="row pillRow mt-5">
                <div className="col-sm-7 col-12 tal">
                    <VideoHover
                        srcVideo={srcVideo}
                        srcImage={srcImage}
                        hrefLink={hrefLink} />
                </div>

                <div className="col-sm-5 col-12 mt-3 txtContent">
                    <h5>{title}</h5>
                    <p >{content}</p>
                </div>
            </div>

        </>
    )
}

