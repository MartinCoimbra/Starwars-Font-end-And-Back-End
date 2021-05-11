import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="card bg-dark text-white mb-3">
				<img
					src={
						store.cambio == true
							? store.imgPersonas[store.posicionimg].url
							: store.imgPlanetas[store.posicionimg].url
					}
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<div className="fondoBiog">
						<h5 className="card-title h2 ">
							{store.cambio == true ? store.personaBiog.name : store.planetBiog.name}
						</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer. This is a wider card with supporting text below as a
							natural lead-in to additional content. This content is a little bit longer. This is a wider
							card with supporting text below as a natural lead-in to additional content. This content is
							a little bit longer. This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</p>
					</div>
					<div className="desenfoque row position-absolute px-0 mx-0 fixed-bottom border-top border-dark  text-center">
						<div className="col-2">
							Nombre:{" "}
							<span className="d-block blancomasOpaco">
								{store.cambio == true ? store.personaBiog.name : store.planetBiog.name}
							</span>{" "}
						</div>
						<div className="col-2">
							{store.cambio == true ? "Año de nacimiento:" : "Climate"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true ? store.personaBiog.birth_year : store.planetBiog.climate}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Genero:" : "Habitantes:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true ? store.personaBiog.gender : store.planetBiog.population}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Altura:" : "Periodo orbital:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true ? store.personaBiog.height : store.planetBiog.orbital_period}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Skin:" : "Rotation Period:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true ? store.personaBiog.skin_color : store.planetBiog.rotation_period}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Color de ojos:" : "Diameter:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true ? store.personaBiog.hair_color : store.planetBiog.diameter}
							</span>
						</div>
						<div className="col-12 my-4">
							<Link to="/">
								<span
									className="btn btn-outline-dark text-white btn-lg borderG px-4"
									href="#"
									role="button">
									Atrás
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
