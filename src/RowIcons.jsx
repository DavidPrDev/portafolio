import './RowIcons.css'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export const RowIcons = () => {

    return (
        <>
            <div className="colIcons justify-content-arround">
                <OverlayTrigger placement="top" overlay={<Tooltip >Html</Tooltip>}>
                    <img className="logoSkills" src="img/html.png" alt="logo html" />
                </OverlayTrigger>

                <OverlayTrigger placement="top" overlay={<Tooltip >Css</Tooltip>}>
                    <img className="logoSkills" src="img/css.png" alt="logo css" />
                </OverlayTrigger>

                <OverlayTrigger placement="top" overlay={<Tooltip >Javascript</Tooltip>}>
                    <img className="logoSkills" src="img/javascript.png" alt=" logo javascript" />
                </OverlayTrigger>

                <OverlayTrigger placement="top" overlay={<Tooltip >Php</Tooltip>}>
                    <img className="logoSkills" src="img/php.png" alt="logo php " />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >Java</Tooltip>}>
                    <img className="logoSkills" src="img/java.png" alt="logo java " />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >React</Tooltip>}>
                    <img className="logoSkills" src="img/react.png" alt=" logo react" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >Jquery</Tooltip>}>
                    <img className="logoSkills" src="img/jquery.png" alt=" logo jquery" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >Laravel</Tooltip>}>
                    <img className="logoSkills" src="img/laravel.png" alt="logo laravel" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >Bootstrap</Tooltip>}>
                    <img className="logoSkills" src="img/bootstrap.png" alt="logo bootstrap" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >Mysql</Tooltip>}>
                    <img className="logoSkills" src="img/mysql.png" alt="logo mysql" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip >Github</Tooltip>}>
                    <img className="logoSkills" src="img/github.png" alt="logo github" />
                </OverlayTrigger>
            </div>
        </>
    )
}