import { ProjectPill } from './ProjectPill'

export const ContainerPills = () => {

    return (
        <>
            <div className='row '>

                <ProjectPill
                    title="Neon-Rhythms"
                    content="Mini-juego web de ritmos con rakings."
                    srcVideo="media/videoNeon.mp4"
                    srcImage="img/neon.png"
                    hrefLink="https://david-pr.com/Neon-rhythms/" />

                <ProjectPill
                    title="Neptuno project control"
                    content="Una aplicacion de gestion empresarial con marcaje horario y diferentes cruds."
                    srcVideo="media/videoNeptuno.mp4"
                    srcImage="img/neptuno.png" />
            </div>
        </>
    )
}

