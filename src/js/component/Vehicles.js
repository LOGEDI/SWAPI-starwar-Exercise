import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Vehicles = () => {
    const { store, actions } = useContext(Context);

  const [isFavorite, setIsFavorite] = useState(false);

  let favIcon = "";
    return (
    <div className="container">
        <hi className="text-light">Vehicles</hi>
        <div className="row row-cols-5 g-3 justify-content-center">
         {store.vehicles.map((i)=>{
            if (i.favorite==false){
                favIcon = "far fa-heart";
            }
            else {
                favIcon = "fas fa-heart";
            }
            return(
            <div key={i.index}className="col">
              <img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                i.uid +
                ".jpg"
              }
              className="card-img-top"
              alt="..."
            />
              <div className="card-body">
                <h5 className="card-titile">{i.name}</h5>
                <div className="d-flex justify-content-between">
                    <link to = {"/Vehicles/"+ i.uid}>
                    <button className="btn btn-outline-light">
                        More info
                    </button>
                    </link>
                    <button className="btn btn-warning"onClick={()=>
                        actions.addToFavorites(
                            i.uid, "/Vehicles/"+i.uid,i.name,i.type,i.index 
                                               )}>
                           <i className={favIcon}/>                     
                    </button>
                    
                </div>
              </div>
            </div>
            
            );
         })}   
        </div>
    </div>   
    );
}
export default Vehicles;