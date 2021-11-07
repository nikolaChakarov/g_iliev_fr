import { useState, useEffect } from "react";


const componentFilters = {
    etatDeBien: [
        "Neuf", "Travaux à terminer", "Entièrement rénové", "Globalement rénové", "En partie rénové", "À rafraîchir", "À rénover", "À entièrement rénover",
    ],
    typeDeBien: [
        "Appartement", "Maison de ville", "Loft/ Atelier", "Penthouse", "Villa", "Chalet", "Résidence chalet", "Immeuble", "Propriété", "Hôtel particulier", "Château", "Ferme", "Péniche", "Terrain", "Maison de Lotissement en copropriété",
    ]
}


// menuLink, filterName, action, range -> arguments for setFilters
const Etat = ({ setFilters }) => {

    const [componentSelectedFilters, setComponentSelectedFilters] = useState([]);

    const onFilterClick = (e) => {
        let link = e.currentTarget.dataset.link;
        let filterName = e.currentTarget.dataset.name;
        let action = e.currentTarget.dataset.action;

        if (action === 'selected') {
            setComponentSelectedFilters(prev => {
                return [...prev, filterName]
            });
        }

        if (action === 'removed') {
            setComponentSelectedFilters(prev => {
                let newFilters = prev.filter(el => el !== filterName);
                return [...newFilters]
            });
        }
        setFilters(link, filterName, action, null);

    }

    return (
        <div className="container-fluid">
            <div className="row filter-set">État du bien</div>
            <div className="row row-3">
                {componentFilters.etatDeBien.map((filterName, i) => {
                    return <div key={i} className="col" onClick={onFilterClick} data-link='etatDeBien' data-name={filterName} data-action="selected">
                        {filterName}
                    </div>
                })}
            </div>
        </div >
    )
};

export default Etat;
