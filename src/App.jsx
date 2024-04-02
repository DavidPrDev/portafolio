import { Github } from 'react-bootstrap-icons';
import { RowcontainerHeader } from './layouts/RowcontainerHeader'
import { RowContainer4 } from './layouts/RowContainer4'
import { RowIcons } from './layouts/RowIcons'
import { Rownav } from './layouts/Rownav'
import { ContainerPills } from './layouts/ContainerPills'
import { ContactForm } from './layouts/ContactForm'
import { RowFooter } from './layouts/RowFooter'
import { OverlayLoading } from './components/OverlayLoading'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-rubik';
import 'typeface-roboto-mono';


export const App = () => {

  return (
    <>
      <OverlayLoading />
      <Rownav />
      <RowcontainerHeader
        titulo="David Pérez "
        subtitulo="Desarrollador Full-stack"
        content=""
        customClass="tituloPrincipal"
        customClassContainer="divheader"
        withIcons={true}
      />
      <RowContainer4
        titulo="Sobre mi"
        content="Desarrollador web en constante aprendizaje , siempre dispuesto a utilizar mis habilidades
       y pasión con un equipo profesional , con conocimiento de front-end(html,css,js) y back-end
        (mysql,php,java) asi como  frameworks y librerías como bootstrap, jquery ,react,laravel. "

        idSeccion="/sobre-mi" />
      <RowContainer4
        titulo="Tecnologías"
        content={<RowIcons />}
        subtitle="Algunas de mis tecnologías mas utilizadas."
        idSeccion="/tecnologias"
      />

      <RowContainer4
        titulo="Proyectos"
        content={<ContainerPills />}
        subtitle={
          <span>
            Consulta algunos de mis proyectos online o su código en <a href="https://github.com/DavidPrDev" id='githubSub' > GitHub <Github /></a>
          </span>
        }
        idSeccion="/proyectos"
      />
      <ContactForm />
      <RowFooter />

    </>

  )
}


