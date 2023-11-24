 import './RowIcons.css' 
 import OverlayTrigger from "react-bootstrap/OverlayTrigger";
 import Tooltip from "react-bootstrap/Tooltip";

export const RowIcons = () => {

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col colIcons">
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Html</Tooltip>}>
                          <img className="logoSkills" src="public/img/html.png" alt="logo html" />
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={  <Tooltip >Css</Tooltip>}>
                        <img className="logoSkills" src="public/img/css.png" alt="logo css" />
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={  <Tooltip >Javascript</Tooltip>}>
                        <img className="logoSkills" src="public/img/javascript.png" alt=" logo javascript" />
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={  <Tooltip >Php</Tooltip>}>
                        <img  className="logoSkills" src="public/img/php.png" alt="logo php " />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >React</Tooltip>}>
                        <img className="logoSkills" src="public/img/react.png" alt=" logo react" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Laravel</Tooltip>}>
                        <img className="logoSkills" src="public/img/laravel.png" alt="logo laravel" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Bootstrap</Tooltip>}>
                        <img  className="logoSkills" src="public/img/bootstrap.png" alt="logo bootstrap" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Mysql</Tooltip>}>
                        <img  className="logoSkills" src="public/img/mysql.png" alt="logo mysql" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Github</Tooltip>}>
                        <img  className="logoSkills" src="public/img/github.png" alt="logo github" />
                    </OverlayTrigger>
                    </div>
                </div>
            </div>
        </>
    )
}