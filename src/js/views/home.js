import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		console.log(store.personas);
	});

	return (
		<div className="container mt-5">
			<div className="overflow-x">
				<h3 className="text-danger">Personajes</h3>
				<div className="d-flex">
					{store.personas.map((element, i) => {
						return (
							<Cards
								key={i}
								urlimg="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/400x400/public/media/image/2020/02/yoda-star-wars-1859043.jpg?itok=I6udHO_e"
								name={element.name}
								imagen={element.imagen}
							/>
						);
					})}
				</div>
			</div>
			<div className="overflow-x">
				<h3 className="text-danger mt-3">Planetas</h3>
				<div className="d-flex">
					{store.planets.map((element, i) => {
						return (
							<Cards
								key={i}
								urlimg="https://qph.fs.quoracdn.net/main-qimg-0c3ecf29e229261a769a29dc6b36b561"
								name={element.name}
								imagen={element.imagen}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
