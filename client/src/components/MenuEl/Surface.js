import { useState, useEffect } from "react";


// menuLink, filterName, action, range -> arguments for setFilters
const Surface = ({ setFilters }) => {

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
            <div className="row filter-set">surface...</div>
            <div className="row row-3">

            </div>
        </div >
    )
};

export default Surface;
