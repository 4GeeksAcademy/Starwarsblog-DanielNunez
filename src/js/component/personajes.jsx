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
                <div key = {id} className="card" style={{width: "18rem", flex: "none", margin: "10px"}}>
                    <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={"/single/" +(id+1)} className="btn btn-primary">Go somewhere</Link>
                        </div>
                </div>
                ))}
            </div>
        </div>
    </>)
}
