import React, {useEffect, useState} from 'react';
import axios from "axios";
import OneCategorie from "./one-categorie";

function CategorieDetails(props) {
    const [categorie, setCategorie] = useState(null);

    useEffect(() => {
        let idCategorie = props.match.params.id;
        axios
            .get("http://localhost:8080/details-produit/"+idCategorie)
            .then((response) => {
                setCategorie(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    })

    return (
        <div>
            <fieldset className="add-fieldset">
                <legend>Fiche produit</legend>
                <div className="detail">
                    {
                        categorie != null ?
                            <OneCategorie categorie={categorie} detail={true}/>
                            :
                            <div></div>
                    }
                </div>


            </fieldset>


        </div>
    );
}

export default CategorieDetails;