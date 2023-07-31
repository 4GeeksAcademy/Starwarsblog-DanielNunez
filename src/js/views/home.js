import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personajes } from "../component/personajes.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Personajes</h1>
		<Personajes/>
	
	</div>
);
