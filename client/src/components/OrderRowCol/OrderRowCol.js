import React from 'react';

import './OrderRowCol.scss';

const OrderRowCol = () => {
    return (
        <div className="container-fluid" id="order-row-col-wrapper">
            <div className="row">
                <div className="col col-md-2 order-md-1 order-2 images">
                    <img className="img-fluid" src="/img/bell.svg" alt="bell icon" />
                    <img className="img-fluid" src="/img/bell.svg" alt="bell icon" />
                </div>
                <div className="col col-md-10 content order-1">
                    <h1>Content...</h1>

                    {new Array(30).fill('').map((el, i) => {
                        return <p key={i}>{i + 1}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default OrderRowCol;