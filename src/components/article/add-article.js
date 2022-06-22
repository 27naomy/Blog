import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

//https://www.youtube.com/watch?v=zT62eVxShsY

function AddArticle() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log("Vous etes entrain d'enregistrer l'aticle suivant: ", values);
    axios
      .post("http://localhost:9001/articles", values, {
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
    <div>
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
                  required: "Required",
                  pattern: {
                    minLength: 2,
                    maxLength: 15,
                    message: "invalide titre",
                  },
                })}
              />
              <span className="error">
                {errors.titre && errors.titre.message}
              </span>
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
                  required: "Required",
                  pattern: {
                    minLength: 10,
                    maxLength: 100,
                    message: "invalide description",
                  },
                })}
              />
              <span className="error">
                {errors.description && errors.description.message}
              </span>
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
                  required: "Required",
                  pattern: {
                    value: /([^\\"]+)/,
                    message: "invalide url image",
                  },
                })}
              />
              <span className="error">
                {errors.image && errors.image.message}
              </span>
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
                  required: "Required",
                  pattern: {
                    value: /^\d*\.?\d*$/,
                    message: "invalide prix",
                  },
                })}
              />
              <span className="error">
                {errors.prix && errors.prix.message}
              </span>
            </div>
          </div>
          <button className="btn add-submit-btn col-75" type="submit">
            Add article
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default AddArticle;
