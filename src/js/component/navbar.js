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
						width="110px"
						height="55px"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					/>
				</Link>
				<h2 className="text-warning">Que la fuerza te acompañe {store.infoProfile.first_name}</h2>
				<div className="col-4 text-right">
					<div className={store.logeado == false ? "d-block" : "d-none"}>
						<Link to="/login" className="ml-3">
							<button className="btn btn-primary">Sign in</button>
						</Link>
						<Link to="/signup" className="ml-3">
							<button className="btn btn-success">Sign up</button>
						</Link>
					</div>
					<div className={store.logeado == false ? "d-none" : "d-block"}>
						<div className="dropdown">
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
								{store.favoritos.map((element, i) => {
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
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	fav: PropTypes.object,
	setBorrarIDElement: PropTypes.func
};
