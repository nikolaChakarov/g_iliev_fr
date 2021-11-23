import React from 'react'
import './Boxes03.scss'

const Boxes03 = () => {
    return (
        <div className="container-fluid" id="boxes-03">
            <div className="top">top</div>
            <div className="middle">
                <p>middle</p>
                {new Array(20).fill('').map((el, i) => {
                    return <p key={i}>{i + 1}</p>
                })}
            </div>
            <div className="bottom">bottom</div>
        </div>
    )
}

export default Boxes03
