import './Icons.css'
import { Github, Linkedin, EnvelopeAtFill } from 'react-bootstrap-icons';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


export const Icons = () => {

    return (
        <>
            <div className="row ">

                <div className=" col-12 d-flex ">
                    <OverlayTrigger placement="top" overlay={<Tooltip >Github</Tooltip>}>
                        <a href="https://github.com/DaviDisDev" id='github' ><Github /></a>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip >Linkedin</Tooltip>}>
                        <a href="https://www.linkedin.com/in/david-p%C3%A9rez-romero-b8a57a292/" id='linkedin'><Linkedin /></a>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip >Contacta conmigo!</Tooltip>}>
                        <a href="mailto:contacto@david-pr.com" id='contact'><EnvelopeAtFill /></a>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    )
}
