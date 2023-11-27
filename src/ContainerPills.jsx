import { ProjectPill } from './ProjectPill'

export const ContainerPills = () => {

    return (
        <>
            <div className='row '>

                <ProjectPill
                    title="Neon-Rhythms"
                    content="Minijuego web creado con html,javascript vanila y css"
                    srcVideo="media/videoLoop.mp4"
                    srcImage="img/neon.png"
                    hrefLink="https://david-pr.com/Neon-rhythms/" />

                <ProjectPill
                    title="Neon-Rhythms"
                    content="Minijuego web creado con html,javascript vanila y css"
                    srcVideo="media/headVideo.mp4"
                    srcImage="img/neon.png" />
            </div>
        </>
    )
}

