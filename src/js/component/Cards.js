import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cards(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-12 col-sm-6 col-md-3 my-3 my-md-0">
			<div className="card p-0 m-0">
				{/* Le ponemos esto para que no pese tanto por mi laptop, luego le ponemos {props.imgsURL} */}
				<img
					src="https://i.pinimg.com/originals/3f/7e/89/3f7e893efe4cc037c20b1f742a0da2ce.jpg"
					className="card-img-top w-100 "
					height="170px"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title text-center">{props.name}</h5>
				</div>
				<div className="card-footer d-flex justify-content-between">
					{/* Aqui editamos */}
					<Link to="/single/0">
						<button className="btn btn-outline-info">
							<span>Link to</span>
						</button>
					</Link>
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
	imgsURL: PropTypes.string
};
