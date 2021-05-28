import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Addpost = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="http://www.solofondos.com/wp-content/uploads/2016/02/982769-scaled.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay login col-12">
					<h3 className="card-title text-center col-5 mt-5 mb-5">Add Post</h3>
					<div>
						<div className="row">
							<div className="col-2">
								<p className="card-text text-left">Name:</p>
								<input
									name="name"
									type="text"
									className="form-control"
									placeholder="name"
									aria-label="name"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">birth_year:</p>
								<input
									name="birth_year"
									type="text"
									className="form-control"
									placeholder="birth_year"
									aria-label="birth_year"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">gender:</p>
								<input
									name="gender"
									type="text"
									className="form-control"
									placeholder="gender"
									aria-label="gender"
									aria-describedby="basic-addon1"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-2">
								<p className="card-text text-left">height:</p>
								<input
									name="height"
									type="text"
									className="form-control"
									placeholder="height"
									aria-label="height"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">skin_color:</p>
								<input
									name="skin_color"
									type="text"
									className="form-control"
									placeholder="skin_color"
									aria-label="skin_color"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">hair_color:</p>
								<input
									name="hair_color"
									type="text"
									className="form-control"
									placeholder="hair_color"
									aria-label="hair_color"
									aria-describedby="basic-addon1"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-4 mt-2">
								<p className="card-text text-left">url:</p>
								<input
									name="foto"
									type="text"
									className="form-control"
									placeholder="url"
									aria-label="foto"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="col-5 mt-2">
								<p className="card-text text-left">Descripcion:</p>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="6" />
							</div>
						</div>
					</div>

					<Link to="/">
						<button className="btn btn-success mr-4">Add post</button>
					</Link>

					<Link to="/">
						<button className="btn btn-secondary">Cancel</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
