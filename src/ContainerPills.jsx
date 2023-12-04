import { ProjectPill } from './ProjectPill'

export const ContainerPills = () => {

    return (
        <>
            <div className='row '>

                <ProjectPill
                    title="Meteo map"
                    content="Mapa en tiempo real 
                    con buscador de municipios gracias a la  api de AEMET OpenData."
                    srcVideo="media/meteomap1.mp4"
                    srcImage="img/meteoImg.png"
                    hrefLink="https://meteomap.david-pr.com/"
                    video={true}
                    icons={["img/laravelIcono.png", "img/reactIcon.png"]} />
                <ProjectPill
                    title="Neon-Rhythms"
                    content="Mini-juego web de ritmos con rakings."
                    srcVideo="media/videoNeon.mp4"
                    srcImage="img/neon.png"
                    hrefLink="https://david-pr.com/Neon-rhythms/"
                    video={true}
                    icons={["img/htmlSb.png", "img/cssSb.png", "img/jsSb.png"]} />

                <ProjectPill
                    title="Neptuno project control"
                    content="Una aplicacion de gestion empresarial con marcaje horario y diferentes cruds."
                    srcVideo="media/videoNeptuno.mp4"
                    srcImage="img/neptuno.png"
                    hrefLink="http://93.93.113.41/plesk-site-preview/curso-mataroin.com/https/93.93.113.41/DPR/ProyectoFinalMvc/"
                    video={true}
                    icons={["img/phpSb.png", "img/mysqlSb.png"]} />
                <ProjectPill
                    title="CSV Compare "
                    content="Clase en php para compara dos ficheros php."
                    srcVideo=""
                    srcImage="img/imgPhp.jpg"
                    hrefLink="https://github.com/DaviDisDev/PHP-CSV-Compare"
                    video="false"
                    icons={["img/phpSb.png"]} />
            </div>
        </>
    )
}

