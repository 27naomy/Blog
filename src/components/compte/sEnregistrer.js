import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import axios from "axios";

import './sEnregistrer.css'

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
                        <h2>Enregistrerez-nous !</h2>
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
                                    required: "Required",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 100,
                                        message: "invalide nomComplet",
                                    },
                                    })}
                                />
                                <span className="error">
                                    {errors.nomComplet && errors.nomComplet.message}
                                </span>
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
                                    required: "Required",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 100,
                                        message: "invalide email",
                                    },
                                    })}
                                />
                                <span className="error">
                                    {errors.email && errors.email.message}
                                </span>
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
                                        required: "Required",
                                        pattern: {
                                        minLength: 2,
                                        maxLength: 100,
                                        message: "invalide pwd",
                                        },
                                    })}
                                    />
                                    <span className="error">
                                    {errors.pwd && errors.pwd.message}
                                    </span>
                                </div>
                            </div>
    
                            <div className="row">
                                <div className="col-75">
                                    <button className="btn add-submit-btn col-75" type="submit">
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