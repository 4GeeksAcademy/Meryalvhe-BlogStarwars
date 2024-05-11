import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-primary rounded" aria-label="Eleventh navbar example">
		<div className="container-fluid">
			<Link to="/"><img src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" className="img-fluid logo" alt="Logo Home"/></Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse " id="navbarsExample09">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
				<Link className="nav-link font" aria-current="page" to="/characters">Characters</Link>
				</li>
				<li className="nav-item">
				<Link className="nav-link font" to="/species">Species</Link>
				</li>
				<li className="nav-item">
				<Link className="nav-link font" aria-current="page" to="/vehicles">Vehicles</Link>
				</li>
				<li className="nav-item">
				<Link className="nav-link font" aria-current="page" to="/planets">Planets</Link>
				</li>
				
			</ul>
			<form role="search">
				<input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
			</form>
			</div>
		</div>
    </nav>
	);
};
