import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "./home.css";

function Homer() {
  return (
    <div>
      <h1>Bienvenus sur le site les Merveilles d'Orients</h1>
      <p>
        Vous etes curieux et desire de decouvrire de nouvelle saveur le
        restaurent les Merveilles d'Orients est fait pour vous
      </p>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://www.kechtrip.com/media/cache/frontDetailProduit/uploads/images/loisirs/loisir_214/d3e68a76e5959e0903f4b501f5c3210a.png"
              class="card-img-top"
              alt="resto"
            />
            <div class="card-body">
              <h5 class="card-title">
                Les Merveilles d'Orients avec un lumiere tamise blanche
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://www.kechtrip.com/media/cache/frontDetailProduit/uploads/images/loisirs/loisir_214/2061019b74b41b2badbabb361ca341fd.jpeg"
              class="card-img-top"
              alt="resto"
            />
            <div class="card-body">
              <h5 class="card-title">
                Les Merveilles d'Orients nuit en plein aire
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/0d/4c/7f/37/restaurant-ksar-el-hamra.jpg"
              class="card-img-top"
              alt="resto"
            />
            <div class="card-body">
              <h5 class="card-title">
                Les Merveilles d'Orients avec un lumieretamise violette{" "}
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://adresses.ma/wp-content/uploads/2016/04/10324506NkVR.jpg"
              class="card-img-top"
              alt="resto"
            />
            <div class="card-body">
              <h5 class="card-title">
                Les Merveille d'Orients de jour en plein aire
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homer;
