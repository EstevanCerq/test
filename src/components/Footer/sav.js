import React, { Fragment } from "react";
import "./legal.css";
import "../../App.css";

function Sav() {
  return (
    <Fragment>
      <section className="page-section bg-light" id="cgv">
        <div className="container">
          <h2 className="text-center">Service Après-Vente</h2>
          <br />
          <h4 style={{ paddingTop: "70px" }}>Puis-je annuler ma commande ?</h4>
          <p style={{ paddingTop: "5px" }}>
            Oui, il est tout à fait possible d'annuler votre commande. N'hésitez
            pas à nous contacter par téléphone au <b>01.55.43.26.65</b> ou par
            mail à l'adresse : <b>help@prideon.com</b>. Notre service client
            vous expliquera la procédure à suivre.
          </p>
          <h4 style={{ paddingTop: "25px" }}>Comment procéder à un retour ?</h4>
          <p style={{ paddingTop: "5px" }}>
            Si le modèle que vous avez reçu ne vous convient pas, il est
            possible de procéder à un retour. Pour ce faire, il est nécessaire
            que votre paire soit encore dans son état neuf, avec son emballage
            intact également. N'hésitez pas à nous contacter par téléphone au
            <b>01.55.43.26.65</b> ou par mail à l'adresse :
            <b>help@prideon.com</b>. Notre service client vous expliquera la
            procédure à suivre.
            <br />
            <br />
            Nous acceptons les retours dans un délai de 14 jours après réception
            de votre paire. N'hésitez pas à nous contacter par téléphone au{" "}
            <b>01.55.43.26.65</b> ou par mail à l'adresse :
            <b>help@prideon.com</b>. Notre service client vous expliquera la
            procédure à suivre.
          </p>
          <h4 style={{ paddingTop: "25px" }}>Les retours sont-ils payants ?</h4>
          <p style={{ paddingTop: "5px" }}>
            Les retours depuis la France métropolitaine sont offerts. N'hésitez
            pas à nous contacter par téléphone au <b>01.55.43.26.65</b> ou par
            mail à l'adresse : <b>help@prideon.com</b>. Notre service client
            vous expliquera la procédure à suivre.
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default Sav;
