import { useState } from 'react'
import { RowcontainerHeader } from './RowcontainerHeader'
import { RowContainer4 } from './RowContainer4'
import { RowIcons } from './RowIcons'
import { Rownav } from './Rownav'

export const App = () => {

  return (
    <>
      <Rownav/>
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
      content="Desarrollador web en constante aprendicaje , preparado para utilizar mis habilidades
       y pasión en un  equipo profesional , con conocimiento de front-end(html,css,js) y back-end
        (mysql,php,java) asi como  frameworks y librerías como bootstrap, jquery ,react,laravel."/>
      <RowContainer4
      titulo="Tecnologias"
      content={<RowIcons/>}
      />
         <RowContainer4
         titulo="Proyectos"
         content=""
         
         />
      
    </>

  )
}


