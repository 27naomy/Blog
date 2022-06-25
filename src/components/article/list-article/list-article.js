import React, { useEffect } from "react";
import axios from "axios";
import OneArticle from "../one-article/one-article";
import { Link } from "react-router-dom";
import "./list-article.css";

function ListArticle(props) {
  useEffect(() => {
    axios
      .get("http://localhost:8080/accueil")
      .then((response) => {
        // setArticles(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const pathImages = window.location.origin + "/images";
  const filteredArticles = [
    {
      id: 1,
      image: pathImages + "/baghrirs.jpeg",
      titre: "Les baghrirs",
      description: "C'est des crepes marocainnes ....",
      prix: 2.5,
    },
    {
      id: 2,
      image: pathImages + "/Harira.jpg",
      titre: "La Harira",
      description: "C'est une soupe marocaine à base de ....",
      prix: 5.0,
    },
    {
      id: 3,
      image: pathImages + "/couscous.jpg",
      titre: "Le couscous",
      description:
        "C'est une plat a marocain a base de semoule et de legume et viande d'agneau ....",
      prix: 9.0,
    },

    {
      id: 4,
      image: pathImages + "/sardine.jpg",
      titre: "Les sardines farcie",
      description:
        "C'est de sardine  farcie au chemoule et epice d'orient ....",
      prix: 3.0,
    },

    {
      id: 5,
      image: pathImages + "/sfenj.jpg",
      titre: "Les sfenj",
      description: "C'est des beignes marocain ....",
      prix: 2.9,
    },
  ];

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
        {filteredArticles.map((article) => (
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
