import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./article-detail.css";

function ArticleDetails(props) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let idArticle = props.match.params.id;
    const url = `http://localhost:3001/articles/${idArticle}`

    axios.get(url)
      .then((response) => {
        setArticle(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {article && (
        <div>
          <fieldset className="add-fieldset">
            <legend>Menu en detail:</legend>
            <div className="detail">
              <div className="article">
                <div className="detail-content">
                  <img
                    className="detail-image"
                    src={`${window.location.origin}/images${article.image}`}
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
                <div className="link-back">
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
