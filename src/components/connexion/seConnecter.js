import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import axios from "axios";

/**
    Cette page permet d'afficher le formulaire de connexion 
    ==> Elle propose un formulaire avec les champs: 
        - LOGIN
        - PASSWORD
    
    ==> on envoi les données saisis au backend sur l'URL: http://localhost:3001/comptes/login
    - Si le login et password saisis existenet sur la base de données 
      ==> le backend envoi la personne avec c'est coordonnée et un STATUT=200 sinon null
      ==> Le cas avec STATUT = 200 on fait une redirection vers la page /home (page prinicipale)
    - Sinon  on reste sur la page de connexion et on affiche les messages d'erreurs.
 */

function SeConnecter() {
  const { handleSubmit, register, errors } = useForm();
  const [isRedirect, setIsRedirect] = useState(false)

  const onSubmit = (values) => {
    console.log("Values: ", values);
    axios.post('http://localhost:3001/comptes/login', values, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        if(res.status === 200 && res.data.length > 0){
          console.log("Vous etes connecté !", res);
          setIsRedirect(true);
        }else{
          console.log("Vous n'etes pas connecté !", res);
          setIsRedirect(false);
        }
        
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
        <div id="seConnecter" className="section layout_padding">
          <div className="container-fluid">
            <div className="col-md-6">
              <div className="heading">
                <h2>Contactez-vous !</h2>
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
                          required: "Email est obligatoire",
                          pattern: {
                            minLength: 2,
                            maxLength: 100,
                            message: "Invalide email",
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
                          required: "Mot de passe est obligatoire",
                          pattern: {
                            minLength: 2,
                            maxLength: 100,
                            message: "Invalide mot de passe",
                          },
                        })}
                      />
                      <span className="error">
                        {errors.pwd && errors.pwd.message}
                      </span>
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

export default SeConnecter;
