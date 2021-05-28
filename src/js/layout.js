import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { Single } from "./views/single";
import { Addpost } from "./views/addPost";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<div className=" flex-column pt-5 mt-5">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar fav={store.fav} setBorrarIDElement={actions.setBorrarIDElement} />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/addpost">
							<Addpost />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
