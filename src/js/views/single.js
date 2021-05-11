import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	/* foreach con la posicion que recibimos */

	/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */
	return (
		<div className="container">
			<div className="card bg-dark text-white mb-3">
				<img
					src="https://i.pinimg.com/originals/3f/7e/89/3f7e893efe4cc037c20b1f742a0da2ce.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title h2">{store.personaBiog.name}</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer. This is a wider card with supporting text below as a natural
						lead-in to additional content. This content is a little bit longer. This is a wider card with
						supporting text below as a natural lead-in to additional content. This content is a little bit
						longer. This is a wider card with supporting text below as a natural lead-in to additional
						content. This content is a little bit longer.
					</p>
					<p className="card-text">Last updated 3 mins ago</p>
					<div className="row position-absolute fixed-bottom border-top border-danger text-danger text-center">
						<div className="col-2">:D</div>
						<div className="col-2">:D</div>
						<div className="col-2">:D</div>
						<div className="col-2">:D</div>
						<div className="col-2">:D</div>
						<div className="col-2">:D</div>
						<div className="col-12 my-4">
							<Link to="/">
								<span className="btn btn-primary btn-lg" href="#" role="button">
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

Single.propTypes = {
	match: PropTypes.object
};
