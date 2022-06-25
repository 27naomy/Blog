import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./one-article.css";

function OneArticle(props) {

  const removeArticle = (idArticle) => {
    const url = 'http://localhost:3001/articles/'+idArticle;
    console.log("REMOVE START:", url)
    
    axios.delete(url)
      .then((response) => {
        console.log("La reponse REMOVE:", response)
        
      })
      .catch((err) => {
        console.log("REMOVE: ", err);
      });

      props.fetchArticles();
  };

  return (
    <div className="article">
      <div className="article-content">
        <img
          className="article-image"
          src={`${window.location.origin}/images${props.article.image}`}
          alt={props.article.titre}
        />
        <span className="article-title"> {props.article.titre} </span>
        <span className="article-price"> {props.article.prix}&euro;</span>
        <span className="btn-details">
          {<Link to={"/articleDetails/" + props.article.articleid}>Details ...</Link>}
        </span>

        <span className="block-remove">
          <button type="button" className="btn btn-danger" onClick={()=>removeArticle(props.article.articleid)}>
            Supprimer
          </button>
        </span>
      </div>
    </div>
  );
}

export default OneArticle;
