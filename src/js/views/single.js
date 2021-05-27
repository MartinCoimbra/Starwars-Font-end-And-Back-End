import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container mt-4">
			<div className="card bg-dark text-white mb-3">
				<img
					src={
						store.cambio == true
							? store.personas2[store.posicion].foto
							: store.planets2[store.posicion].foto
					}
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<div className="fondoBiog">
						<h5 className="card-title h2 ">
							{store.cambio == true
								? store.personas2[store.posicion].name
								: store.planets2[store.posicion].name}
						</h5>
						<p className="card-text">
							{store.cambio == true
								? store.personas2[store.posicion].descripcion
								: store.planets2[store.posicion].descripcion}
						</p>
					</div>
					<div className="desenfoque row position-absolute px-0 mx-0 fixed-bottom border-top border-dark  text-center">
						<div className="col-2">
							Nombre:{" "}
							<span className="d-block blancomasOpaco">
								{store.cambio == true
									? store.personas2[store.posicion].name
									: store.planets2[store.posicion].name}
							</span>{" "}
						</div>
						<div className="col-2">
							{store.cambio == true ? "Año de nacimiento:" : "Climate"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true
									? store.personas2[store.posicion].birth_year
									: store.planets2[store.posicion].climate}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Genero:" : "Habitantes:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true
									? store.personas2[store.posicion].gender
									: store.planets2[store.posicion].population}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Altura:" : "Periodo orbital:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true
									? store.personas2[store.posicion].height
									: store.planets2[store.posicion].orbital_period}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Skin:" : "Rotation Period:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true
									? store.personas2[store.posicion].skin_color
									: store.planets2[store.posicion].rotation_period}
							</span>
						</div>
						<div className="col-2">
							{store.cambio == true ? "Color de ojos:" : "Diameter:"}
							<span className="d-block blancomasOpaco">
								{store.cambio == true
									? store.personas2[store.posicion].hair_color
									: store.planets2[store.posicion].diameter}
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
