import './Boxes.scss';

const Boxes = () => {

    return (
        <div className="container-fluid" id="boxes-wrapper">

            <div className="b-header order-md-1 order-2">
                <p>one</p>
                <p>two</p>
                <p>three</p>
            </div>

            <div className="b-body order-md-2 order-1">
                {new Array(30).fill('').map((el, i) => {
                    return <p>{i + 1}</p>
                })}
            </div>
        </div>
    )
}

export default Boxes;