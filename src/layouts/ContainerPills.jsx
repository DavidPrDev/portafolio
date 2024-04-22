import { ProjectPill } from '../components/ProjectPill'

export const ContainerPills = () => {

    return (
        <>
            <div className='row '>

                <ProjectPill
                    title="React-ui-components"
                    content="Librería para React que se instala a través de npm y proporciona componentes útiles como modales, tooltips y drag and drop."
                    srcVideo="media/react-components.mp4"
                    srcImage="img/react-componente.png"
                    hrefLink="https://react-ui-components.david-pr.com/"
                    video={true}
                    icons={["img/reactIcon.png", "img/htmlSb.png", "img/cssSb.png", "img/jsSb.png"]}
                    urlGithub={"https://github.com/DavidPrDev/react-ui-components"} />


                <ProjectPill
                    title="Receptarium"
                    content="Receptarium es una aplicacion para almacenar y gestionar tus recetas de una forma sencilla para android."
                    srcVideo="media/receptarium.mp4"
                    srcImage="img/receptarium-graph.png"
                    hrefLink="https://github.com/DaviDisDev/Receptarium_public"
                    video={true}
                    icons={["img/android.png", "img/laravelIcono.png", "img/reactIcon.png", "img/mysqlSb.png"]}
                    urlGithub={"https://github.com/DavidPrDev/receptarium1.0"} />

                <ProjectPill
                    title="Meteo map"
                    content="Mapa en tiempo real 
                    con buscador de municipios gracias a la  api de AEMET OpenData."
                    srcVideo="media/meteomap1.mp4"
                    srcImage="img/meteoImg.png"
                    hrefLink="https://meteomap.david-pr.com/"
                    video={true}
                    icons={["img/laravelIcono.png", "img/reactIcon.png", "img/mysqlSb.png"]}
                    urlGithub={"https://github.com/DavidPrDev/meteoMap-1.2"} />

                <ProjectPill
                    title="Neon-Rhythms"
                    content="Mini-juego web de ritmos con rankings."
                    srcVideo="media/videoNeon.mp4"
                    srcImage="img/neon.png"
                    hrefLink="https://david-pr.com/Neon-rhythms/"
                    video={true}
                    icons={["img/htmlSb.png", "img/cssSb.png", "img/jsSb.png"]}
                    urlGithub={"https://github.com/DavidPrDev/Neon-Rhythms"}
                />

                <ProjectPill
                    title="Neptuno project control"
                    content="Una aplicación de gestión empresarial con marcaje horario y diferentes cruds."
                    srcVideo="media/videoNeptuno.mp4"
                    srcImage="img/neptuno.png"
                    hrefLink="http://93.93.113.41/plesk-site-preview/curso-mataroin.com/https/93.93.113.41/DPR/ProyectoFinalMvc/"
                    video={true}
                    icons={["img/phpSb.png", "img/mysqlSb.png"]}
                    urlGithub={"https://github.com/DavidPrDev/Neptuno-project-control"} />

                <ProjectPill
                    title="CSV Compare "
                    content="Clase en php para comparar dos ficheros csv."
                    srcVideo=""
                    srcImage="img/imgPhp.png"
                    hrefLink="https://github.com/DaviDisDev/PHP-CSV-Compare"
                    video="false"
                    icons={["img/phpSb.png"]}
                    urlGithub={"https://github.com/DavidPrDev/PHP-CSV-Compare"} />

            </div>
        </>
    )
}

