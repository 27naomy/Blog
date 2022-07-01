import React from "react";
import "./one-categorie.css";
import { Link } from "react-router-dom";
function OneCategorie(props) {
  return (
    <div className="categorie">
      <div className="categorie-content">
        <img
          className="categorie-image"
          src={props.categorie.image}
          alt={props.categorie.description}
        />
        <span className="categorie-title"> {props.categorie.titre} </span>
        <span className="categorie-price"> {props.categorie.prix}&euro;</span>
      </div>
      <div className="btn-details">
        {
          <Link to={"/categorieDetails/" + props.categorie.id}>
            Details ...
          </Link>
        }
      </div>
      <div>
        <button type="button" class="btn btn-danger">
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default OneCategorie;
