import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
export const Navbar = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="fondoNavYfot fixed-top">
			<nav className=" container navbar navbar-light mb-0 justify-content-between">
				<Link to="/" className="ml-3">
					<img
						width="130px"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					/>
				</Link>
				<h1 className="text-warning">Que la fuerza te acompañe</h1>
				<div className="col-2 text-right">
					<div classNAme="dropdown">
						<button
							className="btn btn-outline-warning dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<p className="d-flex p-0 m-0">Favs {store.fav.length - 1}</p>
						</button>
						<div className="dropdown-menu mt-3 " aria-labelledby="dropdownMenuButton">
							{props.fav.map((element, i) => {
								if (element.name !== "") {
									return (
										<p
											key={i}
											className="dropdown-item liS d-flex justify-content-between"
											href="#">
											<p className="m-0">{element.name}</p>
											<i
												onClick={() => {
													props.setBorrarIDElement(i);
												}}
												className="far fa-trash-alt mt-1 oculOAP text-danger"
											/>
										</p>
									);
								}
							})}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	fav: PropTypes.object,
	setBorrarIDElement: PropTypes.func
};
