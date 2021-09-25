import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuLeftSide.module.css';

const MenuLeftSide = () => {

    const menuItems = ['Accueil', 'Annonces', 'Wishlist', 'Créer un nouveau dossier', 'Gestion des dossiers', 'Gestion accompagnateurs', 'Agenda', 'Accompagnateurs favoris', 'Relevé de compte', 'Historique', 'Documents d’informations']

    return (
        <div className={styles.main}>
            <nav>
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