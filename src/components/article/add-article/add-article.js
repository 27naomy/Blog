import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddArticle() {
  const { handleSubmit, register, errors } = useForm();
  
  const onSubmit = (values) => {
    
    axios.post('http://localhost:3001/articles', values, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(
          "Vous etes entrain d'enregistrer l'aticle suivant: ",
          res.data
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

export default AddArticle;
