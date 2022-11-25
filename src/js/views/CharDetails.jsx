import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharDetals= () => {
    const {store,actions}= useContext(Context);
    const params = useParams();
    useEffect(()=>{
        actions.getPerson(params.theid)
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
                     <div className="col text-danger"><h5>Name</h5><h5>{store.person.Name}</h5></div>
                      <div className="col text-danger"><h5>Birth Year</h5><h5>{store.person.Year}</h5></div>
                      <div className="col text-danger"><h5>Gender</h5><h5>{store.person.Gender}</h5></div>
                      <div className="col text-danger"><h5>Height</h5><h5>{store.person.Height}</h5></div>
	                  <div className="col text-danger"><h5>Skin color</h5><h5>{store.person.skin_color}</h5></div>
	                 <div className="col text-danger"><h5>Eye color</h5><h5>{store.person.eye_color}</h5></div>
                 </div>
    </div>
  </div>
 </div>
 </div>
 </div>
 );

}
export default CharDetals;