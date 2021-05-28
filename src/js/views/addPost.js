import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Addpost = () => {
	const { store, actions } = useContext(Context);
	const [planetOperson, setPlanetOperson] = useState("Person");

	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="http://www.solofondos.com/wp-content/uploads/2016/02/982769-scaled.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay login col-12">
					<h3 className="card-title text-center col-5 mt-2 mb-3">
						Add Post <br /> {planetOperson}{" "}
					</h3>
					<div>
						<div className="row">
							<div className="col-4 mb-3">
								<button
									className="btn btn-primary mr-3"
									onClick={() => {
										setPlanetOperson("Person");
										actions.TipoPlanetOperson("Person");
									}}>
									Person
								</button>
								<button
									className="btn btn-primary"
									onClick={() => {
										setPlanetOperson("Planet");
										actions.TipoPlanetOperson("Planet");
									}}>
									Planet
								</button>
							</div>
						</div>
						<div className="row">
							<div className="col-2">
								<p className="card-text text-left">Name:</p>
								<input
									name="name"
									type="text"
									className="form-control"
									placeholder="Name"
									aria-label="name"
									aria-describedby="basic-addon1"
									onChange={actions.AddPostCard}
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">
									{planetOperson == "Person" ? "Birth_year:" : "Climate:"}
								</p>
								<input
									name={planetOperson == "Person" ? "birth_year" : "climate"}
									type="text"
									className="form-control"
									placeholder={planetOperson == "Person" ? "Birth_year:" : "Climate:"}
									aria-label={planetOperson == "Person" ? "birth_year:" : "climate:"}
									aria-describedby="basic-addon1"
									onChange={actions.AddPostCard}
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">
									{planetOperson == "Person" ? "Gender:" : "Population"}
								</p>
								<input
									name={planetOperson == "Person" ? "gender" : "population"}
									type="text"
									className="form-control"
									placeholder={planetOperson == "Person" ? "Gender:" : "Population"}
									aria-label={planetOperson == "Person" ? "gender:" : "population"}
									aria-describedby="basic-addon1"
									onChange={actions.AddPostCard}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-2">
								<p className="card-text text-left">
									{planetOperson == "Person" ? "Height:" : "Orbital_period:"}
								</p>
								<input
									name={planetOperson == "Person" ? "height" : "orbital_period"}
									type="text"
									className="form-control"
									placeholder={planetOperson == "Person" ? "Height:" : "Orbital_period:"}
									aria-label={planetOperson == "Person" ? "height:" : "orbital_period:"}
									aria-describedby="basic-addon1"
									onChange={actions.AddPostCard}
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">
									{planetOperson == "Person" ? "Skin_color:" : "Rotation_period"}
								</p>
								<input
									name={planetOperson == "Person" ? "skin_color" : "rotation_period"}
									type="text"
									className="form-control"
									placeholder={planetOperson == "Person" ? "Skin_color:" : "Rotation_period"}
									aria-label={planetOperson == "Person" ? "skin_color:" : "rotation_period"}
									aria-describedby="basic-addon1"
									onChange={actions.AddPostCard}
								/>
							</div>
							<div className="col-2">
								<p className="card-text text-left">
									{planetOperson == "Person" ? "Hair_color:" : "Diamete"}
								</p>
								<input
									name={planetOperson == "Person" ? "hair_color" : "diameter"}
									type="text"
									className="form-control"
									placeholder={planetOperson == "Person" ? "Hair_color:" : "Diameter"}
									aria-label={planetOperson == "Person" ? "hair_color:" : "diameter"}
									aria-describedby="basic-addon1"
									onChange={actions.AddPostCard}
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
									onChange={actions.AddPostCard}
								/>
							</div>
							<div className="col-5 mt-2">
								<p className="card-text text-left">Descripcion:</p>
								<textarea
									name="descripcion"
									onChange={actions.AddPostCard}
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="6"
								/>
							</div>
						</div>
					</div>

					<button
						onClick={() => {
							actions.PostearCard();
						}}
						className="btn btn-success mr-4">
						Add post
					</button>

					<Link to="/">
						<button className="btn btn-secondary">Cancel</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
