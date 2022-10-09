import React, { useEffect, useState } from "react";
import axios from "axios";
import OneArticle from "../one-article/one-article";
import { Link } from "react-router-dom";

/**
    Cette page affiche la liste des plats proposés par le site.
    ==> Les informations sont récupérer depuis le backend sur l'URL: http://localhost:3001/articles
    ==> Elle propose un boutton vert "NEW ARTICLE" pour pouvoir aller sur la page de création d'un nouveau plat.
    ==> Elle propose aussi un boutton rouge "SUPPRIMER"  sur chaque plat pour pouvoir le supprimer.
    ==> Elle propose aussi un lien blue "DETAIL ..."  sur chaque plat pour pouvoir aller sur la page de detail de chaque plat.
 */

function ListArticle(props) {
  const [articles, setArticles] = useState([])

  const fetchArticles = ()=> {
    axios.get('http://localhost:3001/articles')
    .then((response) => {
      console.log("La reponse :", response)
      setArticles(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <fieldset>
        <Link className="btn btn-new" to="/addArticle">
          New article
        </Link>
      </fieldset>

      <div className="articles list-one-article">
        {articles.map((article) => (
          <div className="item" key={article.articleid}>
            <OneArticle
              article={article}
              detail={false}
              fetchArticles={fetchArticles}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListArticle;
