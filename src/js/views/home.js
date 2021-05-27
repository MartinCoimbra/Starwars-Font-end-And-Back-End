import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<div className="overflow-x">
				<h3 className="text-danger">Personajes</h3>
				<div className="d-flex">
					{store.personas2.map((element, i) => {
						return <Cards key={i} posicion={i} name={element.name} />;
					})}
				</div>
			</div>
			<div className="overflow-x">
				<h3 className="text-danger mt-3">Planetas</h3>
				<div className="d-flex">
					{store.planets2.map((element, i) => {
						return (
							<Cards key={i} planetas={false} posicion={i} name={element.name} imagen={element.imagen} />
						);
					})}
				</div>
			</div>
		</div>
	);
};
