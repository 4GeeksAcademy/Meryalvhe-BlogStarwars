import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.jsx";

import { Home } from "./views/Home.jsx";
import { Demo } from "./views/Demo.jsx";
import { Single } from "./views/Single.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Characters } from "./views/Characters.jsx";
import { Species } from "./views/Species.jsx";
import { Vehicles } from "./views/Vehicles.jsx";
import { Planets } from "./views/Planets.jsx";
import { CurrentCharacters } from "./views/CurrentCharacters.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column min-vh-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/characters" element = {<Characters/>}/>
						<Route path="/species" element = {<Species/>}/>
						<Route path="/vehicles" element = {<Vehicles/>}/>
						<Route path="/planets" element = {<Planets/>}/>
						<Route path='/user-deails/:id' element={<CurrentCharacters/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
