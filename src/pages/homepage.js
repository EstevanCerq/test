import React, { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Accueil from "../components/Accueil/accueil";
import ListeProduit from "../components/Products/ListProduct";
import "./style/homepage.css";

function Homepage() {
  return (
    <Fragment>
      <div className="body-container">
        {/* ACCUEIL */}
        <Accueil />

        {/* QUI SOMMES NOUS ? */}
        <section className="page-section bg-light" id="quisommesnous">
          <Container>
            <div className="text-center">
              <h2 className="text-uppercase">Qui sommes nous ?</h2>
            </div>

            <Row className="whoareus">
              <Col md className="text-center">
                <Image
                  className="logo-homepage"
                  src="assets/logosneakers.png"
                  alt="logo PrideOn"
                  roundedCircle
                />
              </Col>
              <Col md>
                PrideOn est une boutique de sneakers créée en 2021 dans le but
                de donner la possibilité aux passionnés d'acheter des produits
                limités en toute confiance. Basé à Paris nous disposons d'un
                grand réseau de partenaires qui nous permettent d'avoir les
                derniers modèles dès le jour de sa sortie !
              </Col>
            </Row>
          </Container>
        </section>

        {/* Nike */}
        <section className="page-section" id="nike">
          <div className="container text-center">
            <div className="title-section">
              <h2 className="text-uppercase">Nos produits Nike</h2>
            </div>
            <br />
            <ListeProduit showOnlyThreeItems={true} brand={"nike"} />
            <div className="button-see-all">
              <a href="/nike">
                <button type="button" className="popular-button btn btn-light">
                  Voir tous nos modèles Nike
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* BANDEAU */}
        <section className="bandeau-concours">
          <div className="text-uppercase text-center">
            <h3>Jeu concours en ce moment !</h3>
            <h5>
              Tentez de gagner une paire de sneakers gratuites ou un chèque
              cadeau de 200€ !
            </h5>
            <a
              href="http://docs.google.com/forms/u/5/d/18TBI5-SfGzZIPf5rv_fL1nxuDkKSWXlBT6shLjEIxjQ/edit?usp=forms_home&ths=true"
              target="blank"
            >
              <button type="button" className="popular-button btn btn-light">
                Cliquez ici pour participer
              </button>
            </a>
          </div>
        </section>

        {/* Jordan */}
        <section className="page-section bg-light" id="jordan">
          <div className="container text-center">
            <div className="title-section">
              <h2 className="text-uppercase">Nos produits Air Jordan</h2>
            </div>
            <br />
            <ListeProduit showOnlyThreeItems={true} brand={"jordan"} />
            <div className="button-see-all">
              <a href="/jordan">
                <button type="button" className="popular-button btn btn-dark">
                  Voir tous nos modèles Jordan
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* BANDEAU */}
        <section className="bandeau-social">
          <h2>Retrouvez-nous sur tous nos réseaux sociaux</h2>
          <div className="social-icons">
            <a href="http://www.tiktok.com/@prideon_fr" target="blank">
              <i className="fab fa-tiktok fa-5x" />
            </a>
            <a href="http://www.instagram.com/prideon_fr/" target="blank">
              <i className="fab fa-instagram fa-5x" />
            </a>
            <a href="http://twitter.com/PrideOn_FR" target="blank">
              <i className="fab fa-twitter fa-5x" />
            </a>
          </div>
        </section>

        {/* Yeezy */}
        <section className="page-section" id="yeezy">
          <div className="container text-center">
            <div className="title-section">
              <h2 className="text-uppercase">Nos produits Yeezy</h2>
            </div>
            <br />
            <ListeProduit showOnlyThreeItems={true} brand={"yeezy"} />
            <div className="button-see-all">
              <a href="/yeezy">
                <button type="button" className="popular-button btn btn-dark">
                  Voir tous nos modèles Yeezy
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        {/* <section id="news">
                <div className="left-content"><img src="yeezyshoe.jpg"></img></div>
                <div className="right-content"><h4>La yeezy</h4></div><br />
            </section> */}
      </div>
    </Fragment>
  );
}

export default Homepage;
