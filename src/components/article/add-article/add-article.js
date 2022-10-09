import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Redirect } from 'react-router-dom';


/**
    Cette page permet d'afficher le formulaire de création d'un nouveau plat (article) 
    ==> Elle propose un formulaire avec les champs: 
        - TITRE
        - DESCRIPTION
        - PHOTO
        - PRIX

    ==> on envoi les données saisis au backend sur l'URL: http://localhost:3001/articles
    - Si les données sont valides et le backend arrive à créé le plat sur la BDD 
        ==> Le backend envoi le plat créé et un STATUT=200 sinon null
        ==> Le cas avec STATUT = 200 on fait une redirection vers la page /articles (pages des plats (liste))
    - Sinon  on reste sur la page de création du plat et on affiche les messages d'erreurs.
 */

function AddArticle() {
  const { handleSubmit, register, errors } = useForm();
  const [isRedirect, setIsRedirect] = useState(false);
  
  const onSubmit = (values) => {
    
    axios.post('http://localhost:3001/articles', values, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(
          "Vous etes entrain d'enregistrer l'aticle suivant: ",
          res.data
        );
        setIsRedirect(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRedirect(false);
      });
  };

  
  if(isRedirect === true) {
    return <Redirect to='/articles'/> 
  } else {
    return (
      <div id="back">
      <div id="add-article">
        <fieldset className="add-fieldset">
          <legend>Add new article</legend>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form className="add" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="" className="label">
                  Titre:{" "}
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="titre"
                  placeholder="titre"
                  ref={register({
                    required: "Titre est obligatoire",
                    pattern: {
                      minLength: 2,
                      maxLength: 15,
                      message: "invalide titre",
                    },
                  })}
                />
                <p className="error">
                  {errors.titre && errors.titre.message}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label className="label">Description: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  ref={register({
                    required: "Description est obligatoire",
                    pattern: {
                      minLength: 10,
                      maxLength: 100,
                      message: "invalide description",
                    },
                  })}
                />
                <p className="error">
                  {errors.description && errors.description.message}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label className="label">Image Url: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="image"
                  placeholder="Image Url"
                  ref={register({
                    required: "Image est obligatoire",
                    pattern: {
                      value: /([^\\"]+)/,
                      message: "invalide url image",
                    },
                  })}
                />
                <p className="error">
                  {errors.image && errors.image.message}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label className="label">Prix: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="prix"
                  placeholder="prix"
                  ref={register({
                    required: "Prix est obligatoire",
                    pattern: {
                      value: /^\d*\.?\d*$/,
                      message: "invalide prix",
                    },
                  })}
                />
                <p className="error">
                  {errors.prix && errors.prix.message}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25"></div>
              <div className="col-75">
                <button className="btn add-submit-btn" type="submit">
                  Add article
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

export default AddArticle;
