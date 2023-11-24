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
                          <img className="logoSkills" src="src/assets/img/html.png" alt="logo html" />
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={  <Tooltip >Css</Tooltip>}>
                        <img className="logoSkills" src="src/assets/img/css.png" alt="logo css" />
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={  <Tooltip >Javascript</Tooltip>}>
                        <img className="logoSkills" src="src/assets/img/javascript.png" alt=" logo javascript" />
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={  <Tooltip >Php</Tooltip>}>
                        <img  className="logoSkills" src="src/assets/img/php.png" alt="logo php " />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >React</Tooltip>}>
                        <img className="logoSkills" src="src/assets/img/react.png" alt=" logo react" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Laravel</Tooltip>}>
                        <img className="logoSkills" src="src/assets/img/laravel.png" alt="logo laravel" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Bootstrap</Tooltip>}>
                        <img  className="logoSkills" src="src/assets/img/bootstrap.png" alt="logo bootstrap" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Mysql</Tooltip>}>
                        <img  className="logoSkills" src="src/assets/img/mysql.png" alt="logo mysql" />
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={  <Tooltip >Github</Tooltip>}>
                        <img  className="logoSkills" src="src/assets/img/github.png" alt="logo github" />
                    </OverlayTrigger>

                       
                    </div>
                </div>
            </div>
        </>
    )
}