import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
export const Navbar = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="fondoNavYfot fixed-top">
			<nav className=" container navbar navbar-light mb-0 justify-content-around">
				<div>
					<Link to="/" className="ml-3">
						<img
							width="110px"
							height="55px"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
						/>
					</Link>
				</div>
				<div>
					<h2 className="text-warning">Que la fuerza te acompañe {store.infoProfile.first_name}</h2>
				</div>
				<div className="col-2 px-0 text-right">
					<div className={store.logeado == false ? "d-block" : "d-none"}>
						<Link to="/login">
							<button className="btn btn-outline-warning mr-2">Sign in</button>
						</Link>
						<Link to="/signup">
							<button className="btn btn-outline-success">Sign up</button>
						</Link>
					</div>

					<div className={store.logeado == false ? "d-none" : "d-block"}>
						<button onClick={actions.actionRemove} className="btn btn-outline-danger ml-4 float-right">
							Log Out <br /> ❌
						</button>
						<div className="row justify-content-around">
							<button
								className="btn btn-outline-warning dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								<p className="d-flex p-0 m-0">Favs {store.favoritos.length}</p>
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
														actions.setBorrarIDElement(element.id, element.tipo);
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
