import './Rowcontainer4.css'

export const RowContainer4 = ({titulo,content}) => {

    return (
        <>
            <div className="container container4">
                <div className="row">
                    <div className="col-md-3 d-md-block d-sm-none"></div>
                    <div className="col-sm-12 col-md-6">
                        <h2 className='text-center'>{titulo}</h2>
                     
                    {content}

                    </div>

                    <div className="col-md-3 d-md-block d-sm-none"></div>
                </div>
            </div>
        </>
    )
}

