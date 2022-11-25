import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetsDetals = () => {
    const {store,actions}= useContext(Context);
    const params = useParams();
    useEffect(()=>{
        actions.getsinglePlanets(params.theid)
    },[]);
    return(
   <div className="jumbotron">
      <div className="card mb-3" style={{ width: '18rem' }}>
         <div className="col-md-4">
           <Img variant="top" src="holder.js/100px180" />
         </div>
     <div className="col-md-8">
        <div className="Body">
          <h2 className="Card Title"></h2>
          <p className="Card Title"> Some quick example text to build on the card title and make up the
          bulk of the card's content.</p>
          <Button variant="primary">Go somewhere</Button>
      </div>
  </div>
  <div className="container text-center">
    <div classNames ="row row-cols-6">
    <div className="container text-center">
                 <div className="row row-cols-6">
                     <div className="col text-danger"><h5>Name</h5><h5>{store.singleVehicle.name}</h5></div>
                      <div className="col text-danger"><h5>Population</h5><h5>{store.singleVehicle.model}</h5></div>
                      <div className="col text-danger"><h5>Rotation period</h5><h5>{store.singleVehicle.manufacturer}</h5></div>
                      <div className="col text-danger"><h5>Surface water</h5><h5>{store.singleVehicle.passengers}</h5></div>
	                  <div className="col text-danger"><h5>Gravity</h5><h5>{store.singleVehicle.cargo_capacity}</h5></div>
	                 <div className="col text-danger"><h5>Climate</h5><h5>{store.singlePlanet.climate}</h5></div>
                 </div>
    </div>
  </div>
 </div>
 </div>
 </div>
 );

}
export default PlanetsDetals;