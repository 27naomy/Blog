import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./seConnecter.css";

function SeConnecter() {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    axios.post('http://localhost:3001/contacts', values, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(
          "Vous etes entrain d'enregistrer un nouveau contact: ",
          res.data
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div id="back">
      <div id="contact" className="section layout_padding">
        <div className="container-fluid">
          <div className="col-md-6">
            <div className="heading">
              <h2>Contactez-nous !</h2>
            </div>
            <div className="full margin_top_20">
              <form  onSubmit={handleSubmit(onSubmit)}>
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

                
                <button className="btn add-submit-btn col-75" type="submit">
                  Enregistrer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeConnecter;
