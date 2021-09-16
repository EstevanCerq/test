import React, { Fragment } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Create from "../components/Admin/create";
import GestionProduits from "../components/Admin/gestionproducts";
import EditUsers from "../components/Admin/gestionusers";
import Commande from "../components/Admin/commande";
import Stats from "../components/Admin/stats";
import Category from "../components/Admin/category";
import "./style/backoffice.css";
import "../App.css";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Backoffice() {
    const history = useHistory();
    function currentUserRole() {
        if (
            localStorage.getItem("token") &&
            jwt_decode(localStorage.getItem("token")).roles[0] === "ROLE_ADMIN"
        ) {
            return true;
        } else {
            return false;
        }
    }
    if (currentUserRole() !== true) {
        history.push("/");
    }
    return (
        <Fragment>
            <h2 className="text-center page-section">Backoffice PrideOn</h2>
            <div className="section-backoffice">
                <Tabs defaultActiveKey="creation" id="uncontrolled-tab-example">
                    <Tab eventKey="creation" title="Création de votre produit">
                        <div className="content-tab">
                            <Create />
                        </div>
                    </Tab>
                    <Tab eventKey="list" title="Gestion des produits">
                        <div className="content-tab">
                            <GestionProduits />
                        </div>
                    </Tab>
                    <Tab eventKey="category" title="Création de votre marque">
                        <div className="content-tab">
                            <Category />
                        </div>
                    </Tab>
                    <Tab eventKey="users" title="Gestion des utilisateurs">
                        <div className="content-tab">
                            <EditUsers />
                        </div>
                    </Tab>
                    <Tab eventKey="orders" title="Commandes">
                        <div className="content-tab">
                            <Commande />
                        </div>
                    </Tab>
                    <Tab eventKey="stats" title="Statistiques">
                        <div className="content-tab">
                            <Stats />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </Fragment>
    );
}

export default Backoffice;
