import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container sticky-bottom" id="footer">
      <div className="pre-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 text-left">
              <h4>Moyens de paiements</h4>
              <br />
              <span className="space">
                <i className="fab fa-bitcoin fa-2x" />
                <i className="fab fa-paypal fa-2x" />
                <i className="fab fa-cc-amex fa-2x" />
                <i className="fab fa-cc-visa fa-2x" />
                <i className="fab fa-cc-apple-pay fa-2x" />
              </span>
              <br />
            </div>
            <div className="col-md-3 text-left">
              <h4>Nous contacter</h4>
              <br />
              <p>Appelez-nous : 01.55.43.26.65</p>
              <p>Du lundi au samedi - 10h à 20h</p>
              <p>
                Par mail :{" "}
                <a href="mailto:help@prideon.com">help@prideon.com</a>
              </p>
            </div>
            <div className="col-md-3 text-left">
              <h4>En savoir plus</h4>
              <br />
              <p>
                <a href="/faq">Authenticité et FAQ</a>
              </p>
              <p>
                <a href="/sav">Service Après-Vente</a>
              </p>
              <p>
                <a href="/recrutement">Recrutement</a>
              </p>
            </div>
            <div className="col-md-3 text-left">
              <h4>Légal</h4>
              <br />
              <p>
                <a href="/confidentialite">Confidentialité</a>
              </p>
              <p>
                <a href="/cgv">CGV</a>
              </p>
              <p>
                <a href="/cgu">CGU</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="trait"></div>
      <nav className="navbar sticky-bottom">
        <div className="container-fluid" id="social">
          <div className="row">
            <div className="col-md-3">
              <a href="http://www.tiktok.com/@prideon_fr" target="blank">
                <i className="fab fa-tiktok" />
              </a>
            </div>
            <div className="col-md-3">
              <a href="http://twitter.com/PrideOn_FR" target="blank">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="col-md-3">
              <a href="http://www.instagram.com/prideon_fr/" target="blank">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <p>©PrideOn - Paris. 2021 - Tous droits réservés.</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
