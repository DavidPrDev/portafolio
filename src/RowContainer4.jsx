import './Rowcontainer4.css'

export const RowContainer4 = ({ titulo, content, subtitle = null, idSeccion = null }) => {
    const subt = subtitle == null ? "" : subtitle;
    const idSec = idSeccion == null ? "" : idSeccion;
    return (
        <>

            <div className="container container4" id={idSec}>
                <div className="row">
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                    <div className="col-sm-12 col-md-6">
                        <h2 className=''>{titulo}</h2>
                        <p>{subt}</p>
                        <span className='txtContent'>{content}</span>

                    </div>

                    <div className="col-md-3 d-md-block d-sm-none"></div>
                </div>
            </div>
        </>
    )
}

