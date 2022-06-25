import React from "react";
import "./one-article.css";
import { Link } from "react-router-dom";

const pathImages = window.location.origin + "/images";

function OneArticle(props) {
  return (
    <div className="article">
      <div className="article-content">
        <img
          className="article-image"
          src={`${pathImages}${props.article.imageurl}`}
          alt={props.article.titre}
        />
        <span className="article-title"> {props.article.titre} </span>
        <span className="article-price"> {props.article.prix}&euro;</span>
        <span className="btn-details">
          {<Link to={"/articleDetails/" + props.article.id}>Details ...</Link>}
        </span>

        <span className="block-remove">
          <button type="button" class="btn btn-danger">
            Supprimer
          </button>
        </span>
      </div>
    </div>
  );
}

export default OneArticle;
