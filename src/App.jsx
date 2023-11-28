import { useState } from 'react'
import { RowcontainerHeader } from './RowcontainerHeader'
import { RowContainer4 } from './RowContainer4'
import { RowIcons } from './RowIcons'
import { Rownav } from './Rownav'
import { ContainerPills } from './ContainerPills'
import { ContactForm } from './ContactForm'
import { RowFooter } from './RowFooter'
import { OverlayLoading } from './OverlayLoading'
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
       y pasión con un equipo profesionales , con conocimiento de front-end(html,css,js) y back-end
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
        subtitle="Consulta algunos de mis proyectos."
        idSeccion="/proyectos"
      />
      <ContactForm />
      <RowFooter />
    </>

  )
}


