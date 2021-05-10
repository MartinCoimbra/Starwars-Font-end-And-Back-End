import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<div className="bg-dark">
			<nav className=" container navbar navbar-light mb-3 justify-content-between">
				<Link to="/" className="ml-3">
					<img
						width="130px"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					/>
				</Link>
				<div className="col-2">
					<div classNAme="dropdown mb-3">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favs
						</button>
						<div className="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton">
							{props.fav.map((element, i) => {
								return (
									<a key={i} className="dropdown-item" href="#">
										{element.name}
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	fav: PropTypes.object
};
