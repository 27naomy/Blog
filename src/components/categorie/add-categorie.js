import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";


//https://www.youtube.com/watch?v=zT62eVxShsY

function AddCategorie() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        axios
            .post("http://localhost:9001/categories", values, {'Content-Type': 'application/json' })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <fieldset className="add-fieldset">
                <legend>Add new Categorie</legend>
                { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
                <form className="add" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="" className="label">Titre: </label>
                        </div>
                        <div className="col-75">
                            {/* register your input into the hook by invoking the "register" function */}
                            {/* include validation with required or other standard HTML validation rules */}
                            <input
                                type="text"
                                name="titre" placeholder="titre"

                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        minLength: 2,
                                        maxLength: 15,
                                        message: "invalide titre"
                                    }
                                })}
                            />
                            {/* errors will return when field validation fails  */}
                            <span className="error">{errors.titre && errors.titre.message}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label">Description: </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="description" placeholder="Description"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        minLength: 10,
                                        maxLength: 100,
                                        message: "invalide description"
                                    }
                                })}
                            />
                            <span className="error">{errors.description && errors.description.message}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label">Iamge Url: </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="image" placeholder="Image Url"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /([^\\"]+)/,
                                        message: "invalide url image"
                                    }
                                })}
                            />
                            <span className="error">{errors.image && errors.image.message}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label">Prix: </label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="prix" placeholder="prix"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /^\d*\.?\d*$/,
                                        message: "invalide prix"
                                    }
                                })}
                            />
                            <span className="error">{errors.prix && errors.prix.message}</span>
                        </div>
                    </div>
                    <button className="btn add-submit-btn col-75" type="submit">Add Categorie</button>
                </form>


            </fieldset>
        </div>
    );
}

export default AddCategorie;