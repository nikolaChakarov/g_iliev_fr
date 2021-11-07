import React from 'react';
import './ReactCreateElement.scss';

const Surface = ({ text, serialize }) => {
    return (
        <div>
            <h1>{text}</h1>
            <a href={serialize('123AaZZzz0d')}>link</a>
        </div>
    )
}

const db = [
    {
        type: 'surface',
        click: false,
        text: 'Surface',
        component: Surface,
        props: {
            text: 'Surface',
            serialize: function (str) {
                const regex = new RegExp(/[a-z0-9]+/g);
                const arr = str.match(regex);

                return arr.join('');
            },
        },
    },
    {
        type: 'surface',
        click: false,
        text: 'Surface',
        component: Surface,
        props: {
            text: 'Surface',
            serialize: function (str) {
                const regex = new RegExp(/[a-z0-9]+/g);
                const arr = str.match(regex);

                return arr.join('');
            },
        },
    },
]

const ReactCreateElement = () => {
    return (
        <div className='container-fluid'>
            <ul>
                {db.map(({ component, props }, i) => {
                    return React.createElement(component, props)
                })}
            </ul>
        </div>
    )
}



export default ReactCreateElement;