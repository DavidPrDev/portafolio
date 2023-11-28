import HoverVideoPlayer from "react-hover-video-player"
import './VideoHover.css'
export const VideoHover = ({ srcVideo, srcImage, hrefLink }) => {
    return (
        <HoverVideoPlayer
            videoSrc={srcVideo}
            videoStyle={{
                minWidth: "40vh",
                minHeight: "30vh",
                borderRadius: "10px",
            }}
            pausedOverlay={
                <img
                    src={srcImage}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
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