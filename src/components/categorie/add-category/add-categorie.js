import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

function AddCategorie() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        axios.post(
                    "http://localhost:3001/categories", 
                    values, 
                    {'Content-Type': 'application/json' }
                )
            .then(res => {
                console.log("Vous etes entrain d'enregistrer la categorie suivante: ", res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
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
                                    required: "Required",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 50,
                                        message: "invalide nom"
                                    }
                                })}
                            />
                            <span className="error">{errors.nom && errors.nom.message}</span>
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
                                    required: "Required",
                                    pattern: {
                                        minLength: 0,
                                        maxLength: 500,
                                        message: "invalide libelle"
                                    }
                                })}
                            />
                            <span className="error">{errors.libelle && errors.libelle.message}</span>
                        </div>
                    </div>
                    <button className="btn add-submit-btn col-75" type="submit">Add Categorie</button>
                </form>
            </fieldset>
        </div>
    );
}

export default AddCategorie;