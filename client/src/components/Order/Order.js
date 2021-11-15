import './Order.scss';

const Order = () => {

    return <div className="container-fluid" id="order-wrapper">

        {/* OK no row no col */}
        <div className="icons order-md-1 order-2">
            <img src="/img/bell.svg" alt="bell icon" />
            <img src="/img/bell.svg" alt="bell icon" />
        </div>

        <div className="content order-md-2 order-1">
            <h2>Content</h2>

            {new Array(30).fill('').map((el, i) => {
                return <p key={i}>{i + 1}</p>
            })}
        </div>

    </div>
}

export default Order;