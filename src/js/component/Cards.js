import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cards(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-12 col-sm-6 col-md-3 my-3 my-md-0">
			<div className="card p-0 m-0 mb-3 cardBG text-white">
				{/* Le ponemos esto para que no pese tanto por mi laptop, luego le ponemos {props.imgsURL} */}
				<img
					src={
						props.planetas == false
							? store.planets2[props.posicion].foto
							: store.personas2[props.posicion].foto
					}
					className="card-img-top w-100 "
					height="170px"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title text-center">{props.name}</h5>
				</div>
				<div className="card-footer cardBG2 d-flex justify-content-between">
					{/* Aqui editamos  le pasamos el id de quien somos, intentemos imprimir el nomrbe al hacer click segun la id que le mandamos*/}
					<Link to={"/single/" + props.posicion}>
						<button
							onClick={() => {
								if (props.planetas == false) {
									actions.verMas2(props.posicion);
								} else {
									actions.verMas(props.posicion);
								}
								actions.posicionFlux(props.posicion);
							}}
							className="btn btn-outline-dark">
							<span>Ver mas</span>
						</button>
					</Link>
					<button
						onClick={() => {
							/* para agregar neceitamos el numero del post */
							props.planetas == false
								? actions.serFavPlanet(props.posicion)
								: actions.setFavPerson(props.posicion);
						}}
						className={store.logeado ? "btn btn-outline-warning" : "d-none"}>
						<i className="far fa-heart" />
						<i className="fas fa-heart d-none" />
					</button>
				</div>
			</div>
		</div>
	);
}
Cards.propTypes = {
	name: PropTypes.string,
	imgsURL: PropTypes.string,
	posicion: PropTypes.number,
	planetas: PropTypes.bool
};
