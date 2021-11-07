import { useState, useEffect } from "react";
import "./Annonces.scss";

import { topMenuData, alerts } from "../../utils/menu-db";
import TopMenu from "./TopMenu";
import MenuAside from "./MenuAside";
import AnnoncesSlider from "./AnnoncesSlider";

// a row for a mobile layout
import MobileSearch from "./MobileSearch";

const Annonces = () => {
	const [topMenuList, setTopMenuList] = useState([]);

	// arrow in mobile layout
	const [showMenuMobile, setShowMenuMobile] = useState(false);

	const [selectedFilters, setSelectedFilters] = useState({
		etatDeBien: [],
		typeDeBien: [],
		lieu: { place: "", services: true },
		budget: { min: "", max: "" },
		surface: { abitable: { min: "", max: "" }, terrain: { min: "", max: "" } },
		pieces: { pieces: "1", chambres: "1" },
		features: [],
		alertsAside: []
	});

	/* all filters, from all components */
	/* the arguments are: 
	menuLink -> key from selectedFilters object, 
	filter -> current filter name
	action -> selected or removed from keys' array;
	range: for objects */
	const setFilters = (menuLink, filterName, action, range) => {

		let newFilters = JSON.parse(JSON.stringify(selectedFilters));

		console.log(newFilters);

		if (action === 'selected') {
			newFilters[menuLink].push(filterName);
			newFilters[menuLink] = [...new Set(newFilters[menuLink])];
		}

		if (action === 'removed') {
			newFilters = newFilters[menuLink].filter(el => el = !filterName);
		}

		if (range) {
			newFilters[menuLink] = { ...range }
		}

		setSelectedFilters({ ...newFilters });
	}

	useEffect(() => {
		const topMenuNames = topMenuData.map((el) => el.text);

		setTopMenuList([...topMenuNames]);
	}, []);

	/* state lifting from MenuAside*/
	const [alertBttnClick, setAlertBttnClick] = useState(false);

	return (
		<div className="container-fluid" id="annonces-wrapper">
			{/* the component should have two rows -> 1 for the top menu and 1 for the side menu and slider */}
			{/* an element only for a mobile version */}
			<div
				className="annonces-toggle-mobile d-md-none"
				onClick={() => setShowMenuMobile(!showMenuMobile)}
			>
				<h4>Quel est votre projet?</h4>
				<img src="/img/arrow-down.svg" alt="arrow icon" />
			</div>
			{/* END  mobile version */}

			{/* this row contains the top menu */}
			<div
				className="row d-md-block mobile-wrapper"
				style={{
					display: showMenuMobile ? "block" : "none",
				}}
			>
				{/* an element, only for a mobile version */}
				<div className="d-md-none">
					<MobileSearch
						setAlertBttnClick={setAlertBttnClick}
						alertBttnClick={alertBttnClick}
						alerts={alerts}
					/>
				</div>

				{/* top menu */}
				<TopMenu setFilters={setFilters} />
			</div>

			{/* this is the row for the aside menu plus the slider. has two columns */}
			<div className="row">
				{/* the column for the aside bar */}
				<div
					className="col col-md-2 col-12 d-md-block mobile-wrapper aside-menu"
					style={{
						display: showMenuMobile ? "block" : "none",
					}}
				>
					{/* this component is defferent for mobile */}
					<MenuAside
						setAlertBttnClick={setAlertBttnClick}
						alertBttnClick={alertBttnClick}
						setFilters={setFilters}
						alerts={alerts}
					/>
				</div>

				{/* col for the slider */}
				<div
					className={`col col-md-10 col-12 ${showMenuMobile ? "disappear" : ""
						}`}
				>
					<AnnoncesSlider />
				</div>
			</div>
		</div>
	);
};

export default Annonces;
