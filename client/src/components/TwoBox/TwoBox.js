import './TwoBox.scss';

const TwoBox = () => {

    return (
        <div className="container-fluid wrapper-two-box">
            <div className="one order-md-1 order-2">one</div>
            <div className="two order-md-2 order-1">

                <div className="inner">
                    {new Array(50).fill('').map((el, i) => {
                        return <p>{i + 1}</p>
                    })}
                </div>

            </div>
        </div>
    )

}

export default TwoBox;