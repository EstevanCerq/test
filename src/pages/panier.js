import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import Panier from "../components/Panier/panier";

function MonPanier() {
    if (localStorage.getItem("token")) {
        return <Panier />;
    } else {
        return (
            <Fragment>
                <Container>
                    <h2 className="text-center page-section">
                        Mon Panier <i className="fas fa-shopping-basket" />
                    </h2>
                    <hr />
                    <h2 className="text-center page-section">
                        Connectez vous et ajouter des articles à votre paniers
                    </h2>
                </Container>
            </Fragment>
        );
    }
}
export default MonPanier;
