import React, { useEffect, useState } from "react";
import axios from "axios";
import OneArticle from "../one-article/one-article";
import { Link } from "react-router-dom";
import "./list-article.css";

function ListArticle(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/articles')
    .then((response) => {
      console.log("La reponse :", response)
      setArticles(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  

  const removeArticle = (idArticle) => {
    console.log("L'article a supprimer est : ", idArticle);
  };

  return (
    <div>
      <fieldset>
        <Link className="btn btn-add" to="/addArticle">
          New article
        </Link>
      </fieldset>

      <div className="articles list-one-article">
        {articles.map((article) => (
          <div className="item" key={article.id}>
            <OneArticle
              article={article}
              detail={false}
              removeArticle={removeArticle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListArticle;
