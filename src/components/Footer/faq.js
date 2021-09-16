import React, { Fragment } from "react";
import "./legal.css";
import "../../App.css";

function Faq() {
  return (
    <Fragment>
      <section className="page-section bg-light" id="cgv">
        <div className="container">
          <h2 className="text-center">Authenticité et FAQ</h2>
          <br />
          <h4 style={{ paddingTop: "70px" }}>Qui sommes-nous ?</h4>
          <p style={{ paddingTop: "5px" }}>
            <b>PrideOn</b> est une boutique de sneakers créée en <b>2021</b>{" "}
            dans le but de donner la possibilité aux passionnés d'acheter des
            produits limités en toute confiance. Basé à <b>Paris</b> nous
            disposons d'un grand réseau de partenaires qui nous permettent
            d'avoir les derniers modèles <b>dès le jour de sa sortie !</b>
          </p>
          <h4 style={{ paddingTop: "25px" }}>Authenticité ?</h4>
          <p style={{ paddingTop: "5px" }}>
            Tous nos produits sont certifiés <b>100% authentiques.</b> Nos
            experts vérifient minutieusement chaque paire avant expédition, et
            votre produit vous est ainsi délivré avec son{" "}
            <b>certificat d'authenticité.</b>
            <br />
            <br />
            Nous avons mis au point un{" "}
            <b>processus d'authentification très strict.</b>
            Nos experts authentifient minutieusement chaque paire. Ils observent
            en détail : les coutures, la couleur, le poids, le toucher, l'odeur,
            les matériaux, la boîte, l'emballage, les accessoires, autocollants,
            et même les polices de caractères. Un contrôle de la présence des
            quelques détails apparaissant uniquement sur les paires authentiques
            est ensuite réalisé grâce à une lampe ultraviolet.
          </p>
          <h4 style={{ paddingTop: "25px" }}>Livraison ?</h4>
          <p style={{ paddingTop: "5px" }}>
            Nous travaillons exclusivement avec notre partenaire <b>DHL</b> et
            leur solution <b>DHL Express.</b> Après avoir passé votre commande
            sur PrideOn, vos sneakers sont passées au crible par nos experts
            dans nos locaux. Une fois que vos paires ont été{" "}
            <b>authentifiées</b>, nous les expédions par colis suivi, assuré, et
            qui sera remis contre signature. Recevez alors votre{" "}
            <b>numéro de suivi</b> par mail et par SMS afin de pouvoir suivre en
            temps réel l’avancée de votre <b>expédition.</b>
            <br />
            <br />
            Nos délais de livraison en <b>France métropolitaine</b> varient
            entre <b>3</b> et
            <b>6</b> jours ouvrés. La livraison est <b>offerte.</b>
            <br />
            <br />
            Nous assurons la <b>livraison à l'étranger</b> dans un délai de{" "}
            <b>3</b> à <b>9</b>
            jours ouvrés en fonction de la zone de livraison.{" "}
            <b>Le prix varie en fonction du pays</b> mais n'hésitez pas à nous
            contacter pour plus d'informations.
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default Faq;
