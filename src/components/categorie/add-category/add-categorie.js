import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Redirect } from 'react-router-dom';


/**
    Cette page permet d'afficher le formulaire de création d'une nouvelle catégorie des plats 
    ==> Elle propose un formulaire avec les champs: 
        - NOM
        - LIBELLE

    ==> on envoi les données saisis au backend sur l'URL: http://localhost:3001/categories
    - Si les données sont valides et le backend arrive à créé la categorie sur la BDD 
        ==> Le backend envoi la catzgorie créé et un STATUT=200 sinon null
        ==> Le cas avec STATUT = 200 on fait une redirection vers la page /categories (pages des categories (liste))
    - Sinon  on reste sur la page de création de la categorie et on affiche les messages d'erreurs.
 */

function AddCategorie() {
    const { handleSubmit, register, errors } = useForm();
    const [isRedirect, setIsRedirect] = useState(false);

    const onSubmit = values => {
        axios.post(
                    "http://localhost:3001/categories", 
                    values, 
                    {'Content-Type': 'application/json' }
                )
            .then(res => {
                console.log("Vous etes entrain d'enregistrer la categorie suivante: ", res.data);
                setIsRedirect(true);
            })
            .catch((err) => {
                console.log(err);
                setIsRedirect(false);
            });
    }

if(isRedirect === true) {
    return <Redirect to='/categories'/> 
} else {
    return (
        <div id="back">
        <div id="add-categorie">
            <fieldset className="add-fieldset">
                <legend>Add new Categorie</legend>
                <form className="add" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-25">
                            <label className="label">Nom: </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="nom" placeholder="nom"

                                ref={register({
                                    required: "Nom de categorie est obligatoire",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 50,
                                        message: "invalide nom"
                                    }
                                })}
                            />
                            <p className="error">{errors.nom && errors.nom.message}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label">Libelle: </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="libelle" placeholder="libelle"
                                ref={register({
                                    required: "Libelle de categorie est obligatoire",
                                    pattern: {
                                        minLength: 0,
                                        maxLength: 500,
                                        message: "invalide libelle"
                                    }
                                })}
                            />
                            <p className="error">{errors.libelle && errors.libelle.message}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25"></div>
                        <div className="col-75">
                        <button className="btn add-submit-btn" type="submit">
                            Add Categorie
                        </button>
                        </div>
                    </div>
                </form>
            </fieldset>
            </div>
            </div>
        );
    }
}

export default AddCategorie;