import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    return (<>
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.personajes.map((item, id) => (
                    <div key={id} className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.name}</h5>
                            <p className="card-text">Gender: {item.gender}.</p>
                            <p className="card-text">Eye Color: {item.eye_color}.</p>
                            <Link to={"/single/" + (id + 1)} className="btn btn-primary">More Info</Link>
                            <button onClick={()=> actions.favoritos(item.name)} type="button" class="btn btn-danger"><i className="fa fa-heart"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}
