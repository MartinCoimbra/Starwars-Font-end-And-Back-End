import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-3">
			<div className={store.logeado == false ? "d-none" : "d-block"}>
				<Link to="/addpost">
					<button className="btn btn-success mb-3">+ Hacer un post</button>
				</Link>
			</div>

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
