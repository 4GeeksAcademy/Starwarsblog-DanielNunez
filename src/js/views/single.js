import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect (() => {
		actions.personajeIndividual(params.theid)

	},[])
	return (
		<div className="container">
			<h1>
				{store.personaje.name}
			</h1>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
