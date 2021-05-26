import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="http://www.solofondos.com/wp-content/uploads/2016/02/982769-scaled.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay login col-5">
					<h3 className="card-title text-center mt-5 mb-5">Sing Up</h3>
					<p className="card-text text-left pt-2">Email:</p>
					<input
						type="text"
						className="form-control"
						placeholder="Email"
						aria-label="Email"
						aria-describedby="basic-addon1"
					/>
					<p className="card-text mt-5">Password</p>
					<input
						type="password"
						className="form-control"
						placeholder="********"
						aria-label="********"
						aria-describedby="basic-addon1"
					/>
					<div className="text-right mt-2">
						<button className="btn btn-primary mr-2">Login</button>
						<Link to="/">
							<button className="btn btn-secondary">Cancel</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
