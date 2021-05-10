import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function Cards(props) {
	const { store, actions } = useContext(Context);

	/* const [fav, setFav] = useState([{ name: "Martin" }, { name: "JoseLuis" }]); */
	/*const { store, actions } = useContext(Context); */
	return (
		<div className="col-12 col-sm-6 col-md-3 my-3 my-md-0">
			<div className="card p-0 m-0">
				<img src={props.urlimg} className="card-img-top w-100 " alt="..." />
				<div className="card-body">
					<h5 className="card-title text-center">{props.name}</h5>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<a href="#" className="btn btn-outline-info">
						Leer mas
					</a>
					<button
						onClick={() => {
							actions.setFav([...store.fav, { name: props.name }]);
						}}
						className="btn btn-outline-warning ">
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
	urlimg: PropTypes.string
};
