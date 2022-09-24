import React, { useEffect, useState } from "react";
import axios from "axios";
import OneArticle from "../one-article/one-article";
import { Link } from "react-router-dom";

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
