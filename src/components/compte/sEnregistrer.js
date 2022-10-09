import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import axios from "axios";

/**
    Cette page permet d'afficher le formulaire de création d'un  nouveau compte utilisateur 
    ==> Elle propose un formulaire avec les champs: 
        - NOM COMPLET
        - EMAIL
        - PASSWORD

    ==> on envoi les données saisis au backend sur l'URL: http://localhost:3001/comptes
    - Si les données sont valides et le backend arrive à créé l'utilisateur sur la BDD 
        ==> Le backend envoi l'utilisateur créé et un STATUT=200 sinon null
        ==> Le cas avec STATUT = 200 on fait une redirection vers la page /home (page prinicipale)
    - Sinon  on reste sur la page de création du compte et on affiche les messages d'erreurs.
 */

function SEnregistrer() {
    const { handleSubmit, register, errors } = useForm();
    const [isRedirect, setIsRedirect] = useState(false)
 
    const onSubmit = (values) => {
        axios.post('http://localhost:3001/comptes', values, {
            "Content-Type": "application/json",
        })
        .then((res) => {
            console.log(
            "Vous etes entrain d'enregistrer un nouveau compte: ",
            res.data
            );
            setIsRedirect(true)
        })
        .catch((err) => {
            console.log(err);
            setIsRedirect(false);
        });
    };

    if(isRedirect === true) {
        return <Redirect to='/home'/> 
    } else {
        return (
            <div id="back">
            <div id="sEnregistrer" className="section layout_padding">
                <div className="container-fluid">
                    <div>
                    <div className="heading">
                        <h2>Enregistrerez-vous !</h2>
                    </div>
                    <div className="full margin_top_20">
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-25">
                                <label htmlFor="" className="label">
                                    Nom Complet:{" "}
                                </label>
                                </div>
                                <div className="col-75">
                                <input
                                    type="text"
                                    name="nomComplet"
                                    placeholder="nomComplet"
                                    ref={register({
                                    required: "Nom est obligatoire",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 100,
                                        message: "Invalide nom",
                                    },
                                    })}
                                />
                                <p className="error">
                                    {errors.nomComplet && errors.nomComplet.message}
                                </p>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-25">
                                <label htmlFor="" className="label">
                                    Email:{" "}
                                </label>
                                </div>
                                <div className="col-75">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    ref={register({
                                    required: "Email est obligatoire",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 100,
                                        message: "Invalide email",
                                    },
                                    })}
                                />
                                <p className="error">
                                    {errors.email && errors.email.message}
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="" className="label">
                                    Mot de passe:{" "}
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                    type="password"
                                    name="pwd"
                                    placeholder="Mot de passe"
                                    ref={register({
                                        required: "Mot de passe est obligatoire",
                                        pattern: {
                                        minLength: 2,
                                        maxLength: 100,
                                        message: "Invalide mot de passe",
                                        },
                                    })}
                                    />
                                    <p className="error">
                                    {errors.pwd && errors.pwd.message}
                                    </p>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-25"></div>
                                <div className="col-75">
                                    <button className="btn add-submit-btn" type="submit">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }    
}

export default SEnregistrer;