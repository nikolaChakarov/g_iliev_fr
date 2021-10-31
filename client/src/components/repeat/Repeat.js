import { useState } from "react";
import useWidth from "../../utils/useWidth";
import './Repeat.scss';

const Repeat = () => {
    const menuItems = ['Accueil', 'Annonces', 'Wishlist', 'Créer un nouveau dossier', 'Gestion des dossiers', 'Gestion accompagnateurs', 'Agenda', 'Accompagnateurs favoris', 'Relevé de compte', 'Historique', 'Documents d’informations', 'Profile', 'Se deconneter'];

    const [click, setClick] = useState(false);

    const width = useWidth();

    const onArrowClickHandler = (e) => {
        setClick(!click);
    }

    return (
        <div className="container-fluid" id="menu-aside" style={{
            maxWidth: !click ? '' : width > 576 ? '25%' : '80%',
            position: (click && width <= 576) ? 'absolute' : ''
        }}>
            <div className="row">
                <div className="col">
                    <ul className="ul-items" style={{
                        left: !click ? '-200px' : '',
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
        </div>
    )

};

export default Repeat;