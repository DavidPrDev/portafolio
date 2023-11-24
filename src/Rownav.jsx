import './Rownav.css'
export const Rownav = ({ }) => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark  fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre mi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tecnologias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contactame</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Descargar Cv</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}