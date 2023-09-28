import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planetas = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerPlanetas()
    }, [])
    return (<>
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.planetas.map((item, id) => (
                    <div key={id} className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        {id === 0 ? <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" alt="..." /> :
                            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} className="card-img-top" alt="..." />}
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.name}</h5>
                            <p className="card-text">Climate: {item.climate}.</p>
                            <p className="card-text">Terrain: {item.terrain}.</p>
                            <Link to={"/singlePlanet/" + (id + 1)} className="btn btn-primary">More Info</Link>
                            <button onClick={() => actions.favoritos(item.name)} type="button" class="btn btn-danger"><i className="fa fa-heart"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}
