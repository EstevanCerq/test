import React, { Fragment } from "react";
import "./legal.css";
import "../../App.css";

function Recrutement() {
  return (
    <Fragment>
      <section className="page-section bg-light" id="cgv">
        <div className="container">
          <h2 className="text-center">Recrutement</h2>
          <br />
          <h5 style={{ paddingTop: "40px" }}>Chargé(e) de clientèle</h5>
          <h6>
            <i className="fas fa-pen-nib" style={{ paddingRight: "10px" }} />
            CDI
            <i
              className="fas fa-map-marker-alt"
              style={{ paddingLeft: "25px", paddingRight: "10px" }}
            />
            Paris
          </h6>
          <p style={{ paddingTop: "10px" }}>
            Rattaché(e) au Responsable du service client et communauté, tes
            missions consistent principalement à répondre aux questions
            techniques des clients et consommateurs et à gérer les retours de
            produits suivant la charte de l’entreprise. Vous êtes
            l’intermédiaire incontournable entre nos fournisseurs et nos clients
            dans un objectif premier de satisfaire pleinement nos clients
            finaux. <br />
            <br />
            Ton rôle sera de :{" "}
            <ul>
              <li>
                Traiter dans les délais impartis les retours des produits.
              </li>
              <li>
                Vérifier, enregistrer, reporter les réclamations , selon les
                conditions fixées par PrideOn.
              </li>
              <li>
                Apporter un soutien technique en interne (marketing/ventes) et
                en externe (clients).
              </li>
              <li>
                Participer aux formations techniques et événements. Remonter les
                informations au responsable hiérarchique.
              </li>
            </ul>
          </p>
          <a href="mailto:job@prideon.com">
            <button type="button" className="btn btn-dark">
              Contact nous par mail !
            </button>
          </a>
          <hr />
          <h5>Webmaster</h5>
          <h6>
            <i className="fas fa-pen-nib" style={{ paddingRight: "10px" }} />
            Alternance
            <i
              className="fas fa-map-marker-alt"
              style={{ paddingLeft: "25px", paddingRight: "10px" }}
            />
            Paris ou télétravail
          </h6>
          <p style={{ paddingTop: "10px" }}>
            En tant que Webmaster, tu intégreras le service Web pour gérer les
            anomalies & améliorations techniques de premier niveau de notre site
            internet. <br />
            <br />
            Ton rôle sera de :{" "}
            <ul>
              <li>Trouver des solutions aux besoins fonctionnels.</li>
              <li>Optimiser le site.</li>
              <li>Gérer le contenu du site.</li>
              <li>Trouver des idées pour améliorer le site.</li>
            </ul>
          </p>
          <a href="mailto:job@prideon.com">
            <button type="button" className="btn btn-dark">
              Contact nous par mail !
            </button>
          </a>
          <hr />
          <h5>Logisticien</h5>
          <h6>
            <i className="fas fa-pen-nib" style={{ paddingRight: "10px" }} />
            CDI
            <i
              className="fas fa-map-marker-alt"
              style={{ paddingLeft: "25px", paddingRight: "10px" }}
            />
            Paris
          </h6>
          <p style={{ paddingTop: "10px" }}>
            Tu rejoindras l’équipe de la logistique afin de veiller au bon
            fonctionnement mais aussi à une accélération de notre activité !{" "}
            <br />
            <br />
            Ton rôle sera de :{" "}
            <ul>
              <li>
                Tu t’assureras quotidiennement du bon déroulé des processus
                d’expédition, de livraison mais aussi de la réception des
                commandes par le client.
              </li>
              <li>
                Tu veilleras au bon étiquetage et à la préparation des commandes
                clients.
              </li>
              <li>Vérification des bons de livraisons.</li>
              <li>Préparation des colis.</li>
              <li>Préparation des documents destinés aux transporteurs.</li>
            </ul>
          </p>
          <a href="mailto:job@prideon.com">
            <button type="button" className="btn btn-dark">
              Contact nous par mail !
            </button>
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default Recrutement;
