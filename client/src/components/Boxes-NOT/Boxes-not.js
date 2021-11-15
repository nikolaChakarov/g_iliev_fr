import React from "react";
import "./Boxes-NOT.scss";

const Boxes = () => {
    return (
        <div id="wrapper-box">
            <div className="one order-md-1 order-2">one</div>

            <div className="two order-md-2 order-1">
                <div className="inner">
                    {new Array(50).fill('').map((el, i) => {
                        return <p>{i + 'x'}</p>
                    })}
                </div>

                <div className="chat">xxx</div>
            </div>
        </div>
    );
};

export default Boxes;