import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './list-categorie.css';

function ListCategorie(props) {
    const [categories, setCategories] = useState([])

    const fetchCategories = ()=> {
        axios.get('http://localhost:3001/categories')
        .then((response) => {
            setCategories(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
      }

    useEffect(() => {
        fetchCategories();
    }, [])

    const removeCategorie = (idCategory) => {
        const url = 'http://localhost:3001/categories/'+idCategory;
        
        axios.delete(url)
          .then((response) => {
            console.log("La reponse REMOVE:", response)
          })
          .catch((err) => {
            console.log("REMOVE: ", err);
          });
    
          fetchCategories();
      };

    return (
        <div>
            <fieldset>
               <Link className="btn btn-add" to="/addCategorie">New categorie</Link>
            </fieldset>

            <div className="categories list-one-categorie">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOM</th>
                        <th scope="col">LIBELLE</th>
                        <th scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(categorie =>
                        <tr className="" key={categorie.categorieid}>
                            <td>{categorie.categorieid}</td>
                            <td>{categorie.nom}</td>
                            <td>{categorie.libelle}</td>
                            <td>
                            <button type="button" className="btn-danger" onClick={()=>removeCategorie(categorie.categorieid)}>
                                Supprimer
                            </button>
                            </td>
                        </tr>
                    )}
                </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default ListCategorie;