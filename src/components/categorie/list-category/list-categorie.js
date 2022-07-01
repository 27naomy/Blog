import React, {useEffect} from 'react';
import axios from 'axios';
import OneCategorie from "../one-category/one-categorie";
import {Link} from "react-router-dom";
import './list-categorie.css';

function ListCategorie(props) {
    

    useEffect(() => {
        axios
            .get("http://localhost:8080/accueil")
            .then((response) => {
                //setCategories(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    })

    const filteredCategories= [
        {
            id: 1,
            image: "C:/Users/user/Downloads/blog-web/manage-categories-react/public/logo192.png",
            titre: "titre produit",
            description: "description produit",
            prix : 12.99
        },
        {
            id: 2,
            image: "vide pour l'instant 2",
            titre: "titre produit 2",
            description: "description produit 2",
            prix : 2.00
        }
    ];

    return (
        <div>
            <fieldset>
               <Link className="btn btn-add" to="/addcategorie">New categorie</Link>
            </fieldset>

            <div className="categories list-one-categorie">
                {
                    filteredCategories.map(categorie =>
                        <div className="item" key={categorie.id}>
                            <OneCategorie categorie={categorie} detail={false}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ListCategorie;