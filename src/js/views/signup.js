import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	/* Para leer el token:
    * getItem()    Muchas gracias Dieguito!!!!
    */
	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="https://p4.wallpaperbetter.com/wallpaper/139/978/356/general-grievous-in-star-wars-battlefront-ii-5k-wallpaper-preview.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay login col-12">
					<h3 className="card-title text-center mt-5 mb-5">Sign Up</h3>
					<div className="row justify-content-around">
						<div className="col-4">
							<p className="card-text">First_name:</p>
							<input
								onChange={actions.signupData}
								name="first_name"
								type="text"
								className="form-control"
								placeholder="first_name"
								aria-label="first_name"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="col-4">
							<p className="card-text">Last_name</p>
							<input
								onChange={actions.signupData}
								name="last_name"
								type="text"
								className="form-control"
								placeholder="last_name"
								aria-label="last_name"
								aria-describedby="basic-addon1"
							/>
						</div>
					</div>
					<div className="row justify-content-around mt-5">
						<div className="col-4">
							<p className="card-text">Email:</p>
							<input
								onChange={actions.signupData}
								name="email"
								type="text"
								className="form-control"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div className="col-4">
							<p className="card-text">Password</p>
							<input
								onChange={actions.signupData}
								name="password"
								type="password"
								className="form-control"
								placeholder="********"
								aria-label="********"
								aria-describedby="basic-addon1"
							/>
						</div>
					</div>

					<div className="text-center">
						<button
							onClick={() => {
								actions.signup();
								console.log("click");
							}}
							className="btn btn-success mr-2">
							Sign up
							{store.logeado == true ? <Redirect to="/" /> : ""}
						</button>
						<Link to="/">
							<button className="btn btn-secondary">Cancel</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
