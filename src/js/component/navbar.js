import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="data:image/png;base64,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" /></span>
			</Link>
			<div className="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					{store.favoritos.map((item, id) => (
						<li key={id} ><a onClick={() => actions.favoritos(item)} class="dropdown-item" href="#">{item}</a></li>))}
				</ul>
			</div>
		</nav>
	);
};
