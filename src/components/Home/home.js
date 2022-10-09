import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";

/**
    Cette page affiche un ensemble des plats Marocains, plus un mot de bienvenue.
    Le menu est toujours present sur les pages ce qui permet de naviger entre les page du site.
 */

function Home() {
  return (
    <div>
      <h1>Bienvenus sur le site les Merveilles d'Orients</h1>
      <p>
        Vous etes curieux et desire de decouvrire de nouvelle saveur le
        restaurent les Merveilles d'Orients est fait pour vous
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://www.kechtrip.com/media/cache/frontDetailProduit/uploads/images/loisirs/loisir_214/d3e68a76e5959e0903f4b501f5c3210a.png"
              className="card-img-top"
              alt="resto"
            />
            <div className="card-body">
              <h5 className="card-title">
                Les Merveilles d'Orients avec un lumiere tamise blanche
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://www.kechtrip.com/media/cache/frontDetailProduit/uploads/images/loisirs/loisir_214/2061019b74b41b2badbabb361ca341fd.jpeg"
              className="card-img-top"
              alt="resto"
            />
            <div className="card-body">
              <h5 className="card-title">
                Les Merveilles d'Orients nuit en plein aire
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/0d/4c/7f/37/restaurant-ksar-el-hamra.jpg"
              className="card-img-top"
              alt="resto"
            />
            <div className="card-body">
              <h5 className="card-title">
                Les Merveilles d'Orients avec un lumieretamise violette{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://adresses.ma/wp-content/uploads/2016/04/10324506NkVR.jpg"
              className="card-img-top"
              alt="resto"
            />
            <div className="card-body">
              <h5 className="card-title">
                Les Merveille d'Orients de jour en plein aire
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
