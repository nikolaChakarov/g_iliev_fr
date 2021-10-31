import React, { useState, useEffect } from 'react';
import useCurrentWidth from '../../../utils/useCurrentWidth';
import './MenuAside.scss';

const MenuAside = () => {
    const menuItems = ['Accueil', 'Annonces', 'Wishlist', 'Créer un nouveau dossier', 'Gestion des dossiers', 'Gestion accompagnateurs', 'Agenda', 'Accompagnateurs favoris', 'Relevé de compte', 'Historique', 'Documents d’informations'];

    const [click, setClick] = useState(false);

    const currentWidth = useCurrentWidth();

    const onArrowClickHandler = (e) => {
        setClick(!click);
    }

    return (
        <div className="row" id="menu-aside">

            <div className="col col-items" style={{
                maxWidth: !click ? '' : currentWidth > 576 ? '25%' : '80%',
                position: (click && currentWidth <= 576) ? 'absolute' : ''
            }}>
                <ul className="ul-items" style={{
                    left: !click ? '-100vw' : '',
                    opacity: !click ? '0' : ''
                }}>
                    {menuItems.map((el, i) => {
                        return (
                            <li key={i}>{el}</li>
                        )
                    })}
                </ul>


                <div className="toggle-menu" onClick={onArrowClickHandler}>
                    <img className="img-fluid img-custom" src="/img/left-arrow.svg" alt="left arrow" style={{
                        transform: click ? 'rotate(180deg)' : ''
                    }} />
                </div>

            </div>
        </div>
    )
}

export default MenuAside