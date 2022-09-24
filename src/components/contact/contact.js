import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const { handleSubmit, register, errors } = useForm();
  const [contacts, setContacts ] = useState([]);

  const fetchContacts = ()=> {
    axios.get('http://localhost:3001/contacts')
    .then((response) => {
      setContacts(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    fetchContacts();
  }, []);
 
  const onSubmit = (values) => {
    axios.post('http://localhost:3001/contacts', values, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log(
          "Vous etes entrain d'enregistrer un nouveau contact: ",
          res.data
        );
        fetchContacts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="back">
      <div id="contact" className="section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_left_0">
              <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">NOM et Prenom</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">TEL</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts?.map(contact =>
                        <tr className="" key={contact.contactid}>
                            <td>{contact.nomcomplet}</td>
                            <td>{contact.email}</td>
                            <td>{contact.tel}</td>
                        </tr>
                    )}
                </tbody>
              </table>
            </div>

            <div className="col-md-6">
              <div className="heading">
                <h2>Créer votre compte !</h2>
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
                        Tel:{" "}
                      </label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="tel"
                        placeholder="tel"
                        ref={register({
                          required: "Téléphone est obligatoire",
                          pattern: {
                            minLength: 2,
                            maxLength: 100,
                            message: "Invalide tel",
                          },
                        })}
                      />
                      <p className="error">
                        {errors.tel && errors.tel.message}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label htmlFor="" className="label">
                      Message:{" "}
                      </label>
                    </div>
                    <div className="col-75">
                      <input
                        type="text"
                        name="message"
                        placeholder="message"
                        ref={register({
                          required: "Message est obligatoire",
                          pattern: {
                            minLength: 2,
                            maxLength: 500,
                            message: "Invalide message",
                          },
                        })}
                      />
                      <p className="error">
                        {errors.message && errors.message.message}
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
    </div>
  );
}

export default Contact;
