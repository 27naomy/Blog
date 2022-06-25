import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import ListCategorie from "./components/categorie/list-categorie";
import ListArticle from "./components/article/list-article";
import AddArticle from "./components/article/add-article";
import ArticleDetails from "./components/article/article-details";
import Contact from "./components/contact/contact";
import SeConnecter from "./components/connexion/seConnecter";
import SEnregistrer from "./components/compte/sEnregistrer";
import Home from "./components/Home/home";

import "./App.css";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="se-connecter">
            <Link to="/seConnecter">Se connecter</Link>
          </li>
          <li className="se-connecter">
            <Link to="/enregistrer">Créer compte</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/articles" component={ListArticle}></Route>
          <Route path="/addArticle" component={AddArticle}></Route>
          <Route path="/articleDetails/:id" component={ArticleDetails}></Route>
          <Route path="/categories" component={ListCategorie}></Route>
          <Route path="/seConnecter" component={SeConnecter}></Route>
          <Route path="/enregistrer" component={SEnregistrer}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
