import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.planetaIndividual(params.theid)

    }, [])
    return (
        <div className="container">
            <h1>
                {store.planeta.name}
            </h1>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {(params.theid) === 1 ?
                            <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="img-fluid rounded-start" alt="..." /> :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.theid) + ".jpg"} className="img-fluid rounded-start" alt="..." />}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">Climate: {store.planeta.climate}</p>
                            <p className="card-text">Population: {store.planeta.population}</p>
                            <p className="card-text">Terrain: {store.planeta.terrain}</p>
                            <p className="card-text">Diameter: {store.planeta.diameter}</p>
                            <p className="card-text">Gravity: {store.planeta.gravity}</p>
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
