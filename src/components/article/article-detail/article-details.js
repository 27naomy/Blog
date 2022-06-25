import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./article-detail.css";

function ArticleDetails(props) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let idArticle = props.match.params.id;
    //TODO: remove it after
    const pathImages = window.location.origin + "/images";
    axios
      .get("http://localhost:8080/details-produit/" + idArticle)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {article && (
        <div>
          <fieldset className="add-fieldset">
            <legend>Fiche produit</legend>
            <div className="detail">
              <div className="article">
                <div className="detail-content">
                  <img
                    className="detail-image"
                    src={article.image}
                    alt={article.titre}
                  />
                  <div className="detail-infos">
                    <span className="detail-title"> Nom: {article.titre} </span>
                    <span className="detail-price">
                      {" "}
                      Prix: {article.prix}&euro;
                    </span>
                    <span className="detail-price">
                      {" "}
                      Description: {article.description}
                    </span>
                  </div>
                </div>
                <div className="btn btn-back">
                  {<Link to={"/articles"}>Retour</Link>}
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      )}
    </>
  );
}

export default ArticleDetails;
