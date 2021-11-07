import React, { useState } from 'react';
import "./TopMenu.scss";

import Etat from "../MenuEl/Etat";
import Lieu from '../MenuEl/Lieu';
import Budget from '../MenuEl/Budget';
import Surface from '../MenuEl/Surface';
import Pieces from '../MenuEl/Pieces';

const componentMenuLinks = [
	{
		type: 'etat',
		text: 'Que recherchez-vous ?',
		click: false,
		component: Etat
	},
	{
		type: 'lieu',
		text: 'Lieu',
		click: false,
		component: Lieu
	},
	{
		type: 'budget',
		text: 'Budget',
		click: false,
		component: Budget
	},
	{
		type: 'surface',
		text: 'Surface',
		click: false,
		component: Surface
	},
	{
		type: 'pieces',
		text: 'Pièces',
		clikc: false,
		component: Pieces
	}

]

const TopMenu = ({ setFilters }) => {

	const [menuLinks, setMenuLinks] = useState([...componentMenuLinks]);

	const toggleMenuHandler = (e) => {
		const currentClickedMenu = e.currentTarget.dataset.name;
		/* only one menu item can be open */
		setMenuLinks(prev => {
			let res = prev.reduce((acc, curr) => {
				if (curr.type === currentClickedMenu) {
					curr.click = !curr.click
				} else {
					curr.click = false;
				}
				acc.push(curr);
				return acc;

			}, [])


			return [...res];
		});
	}

	return (
		<div className="container-fluid" id="top-menu">
			{/* a component with one row and two columns;  col 1 -> menu; col 2 -> search bttns*/}
			<div className="row top-menu-set">
				{/* menu col */}
				<div className="col col-md-10 d-flex top-menu-links">
					{menuLinks.map(({ type, text, click, component }, i) => {
						return (
							<div key={i} className="col">
								<div className="dropdown-set d-flex" onClick={toggleMenuHandler} data-name={type}>
									<h4>{text}</h4>
									<img src="/img/arrow-down.svg" alt="arrow icon" />
								</div>

								{click ? React.createElement(component, { setFilters }) : null}
							</div>
						);
					})}
				</div>

				{/* search icons col; this col will be removed for mobile and placed in other component because of the mobile version menu order */}
				<div className="col col-md-2 d-md-flex d-none top-menu-search-bttns">
					<div className="search">
						<img
							className="img-fluid"
							src="/img/search.svg"
							alt="search icon"
						/>
					</div>
					<div className="bell">
						<img className="img-fluid" src="/img/bell.svg" alt="bell icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopMenu;
