import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.personajeIndividual(params.theid)

	}, [])
	return (
		<div className="container">
			<h1>
				{store.personaje.name}
			</h1>
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.theid) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<p className="card-text">Birth Year: {store.personaje.birth_year}</p>
							<p className="card-text">Gender: {store.personaje.gender}</p>
							<p className="card-text">Height: {store.personaje.height}</p>
							<p className="card-text">Mass: {store.personaje.mass}</p>
							<p className="card-text">Eye Color: {store.personaje.eye_color}</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
