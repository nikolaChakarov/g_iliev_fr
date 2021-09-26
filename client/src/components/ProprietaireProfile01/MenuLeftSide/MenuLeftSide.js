import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuLeftSide.module.css';

import arrow from '../../../img/arrow.svg';

const MenuLeftSide = () => {

    const menuItems = ['Accueil', 'Annonces', 'Wishlist', 'Créer un nouveau dossier', 'Gestion des dossiers', 'Gestion accompagnateurs', 'Agenda', 'Accompagnateurs favoris', 'Relevé de compte', 'Historique', 'Documents d’informations'];

    const [arrowClick, setArrowClick] = useState(false);

    const onArrowClickHandler = () => {
        setArrowClick(!arrowClick);
    }

    return (
        <div
            className={styles.main}
            style={{ width: arrowClick ? '8.25rem' : '26.9rem' }}
        >

            <div className={styles.arrow}
                onClick={onArrowClickHandler}
            >
                <img
                    src={arrow}
                    alt="arrow"
                    style={{ transform: arrowClick ? 'rotate(0)' : 'rotate(-180deg)' }}
                />
            </div>

            <nav
                style={{
                    left: arrowClick ? '-300px' : '1.35rem',
                    opacity: arrowClick ? '0' : '1'
                }}
            >
                <ul>
                    {
                        menuItems.map((el, i) => {
                            const href = cerialize(el)

                            return (
                                <li
                                    key={i}
                                >
                                    <Link to={href}>{el}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

        </div>
    )
};

const cerialize = (str) => {
    const regex = /[a-zA-Z0-9]+/g;

    const clear = str.match(regex);
    const res = clear.reduce((acc, curr) => {

        acc += curr;
        return acc.toLowerCase();

    }, '');

    return res;
}

export default MenuLeftSide;