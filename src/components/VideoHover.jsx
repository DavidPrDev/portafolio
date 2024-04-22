import HoverVideoPlayer from "react-hover-video-player"
import '../styles/VideoHover.css'
export const VideoHover = ({ srcVideo, srcImage, hrefLink }) => {
    return (
        <HoverVideoPlayer
            videoSrc={srcVideo}
            videoStyle={{
                borderRadius: "10px",
            }}
            pausedOverlay={
                <img
                    src={srcImage}
                    alt=""
                    style={{

                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: "10px",
                    }}
                />
            }

            hoverOverlay={
                <>
                    <div className="containerOverlary">

                        <p>
                            <a
                                href={hrefLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="imgLink" src="img/enlace.png" alt="logo de un enlace" />
                            </a>
                        </p>
                    </div>
                </>
            }
        />
    );
}