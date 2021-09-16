import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

import "./style/ficheproduit.css";

export default class FicheProduit extends Component {
    state = {
        loading: true,
        product: null,
        selectSize: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }

    fetchData = async (id) => {
        const url = `http://localhost:8000/api/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ product: data, loading: false });
    };

    selectSize = (event) => {
        this.setState({ selectSize: event.target.value });
        event.preventDefault();
    };

    addToCart(idProduct) {
        if (localStorage.getItem("token")) {
            let username = jwt_decode(localStorage.getItem("token"));
            if (Number(this.state.selectSize) !== 0) {
                fetch(`http://localhost:8000/api/paniers`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        user: "/api/users/" + localStorage.getItem("userId"),
                        product: "/api/products/" + idProduct,
                        size: Number(this.state.selectSize),
                    }),
                });
                Swal.fire({
                    icon: "success",
                    title: "",
                    text: "Produit ajouté au panier",
                    showConfirmButton: false,
                    timer: 2500,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "",
                    text: "Veuillez choisir une taille",
                    showConfirmButton: false,
                    timer: 2500,
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "",
                text: "Veuillez vous connecter afin de procéder à vos achats",
                showConfirmButton: false,
                timer: 2500,
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.product ? (
                    <div>Chargement…</div>
                ) : (
                    <Fragment>
                        <section className="page-section">
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    {this.state.product
                                                        .image ? (
                                                        <td>
                                                            <img
                                                                src={
                                                                    "http://localhost:8000/products/" +
                                                                    this.state
                                                                        .product
                                                                        .image
                                                                        .filePath
                                                                }
                                                                alt="produitImage"
                                                            />
                                                        </td>
                                                    ) : (
                                                        <td></td>
                                                    )}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                    <Col sm={6}>
                                        <h2>{this.state.product.name}</h2>
                                        <hr />
                                        <h4>
                                            Marque : {this.state.product.brand}
                                            <br />
                                            Sexe : {this.state.product.gender}
                                            <br />
                                            Prix : {this.state.product.price} €
                                        </h4>
                                        <div className="choose-size">
                                            <Form.Label
                                                className="my-1 mr-2"
                                                htmlFor="inlineFormCustomSelectPref"
                                            >
                                                Tailles disponibles :
                                            </Form.Label>
                                            <Form.Control
                                                as="select"
                                                className="my-1 mr-sm-2"
                                                id="inlineFormCustomSelectPref"
                                                onChange={this.selectSize.bind(
                                                    this
                                                )}
                                                custom
                                            >
                                                <option value="0">
                                                    Choisir...
                                                </option>
                                                <option value="38">38</option>
                                                <option value="39">39</option>
                                                <option value="40">40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                                <option value="43">43</option>
                                                <option value="44">44</option>
                                                <option value="45">45</option>
                                            </Form.Control>
                                        </div>
                                        <br />
                                        <div
                                            onClick={() =>
                                                this.addToCart(
                                                    this.state.product.id
                                                )
                                            }
                                            className="button-add-cart"
                                        >
                                            <button
                                                type="button"
                                                className="addcart btn btn-success"
                                            >
                                                Ajouter au panier{" "}
                                                <i className="fas fa-cart-arrow-down" />
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <hr />
                                <br />
                                <h4>Description :</h4>
                                <p>{this.state.product.description}</p>
                                <b>Date de sortie : </b>
                                {this.state.product.date}
                                <br />
                                <br />
                                <hr />
                                <div className="text-center garantie">
                                    <Row>
                                        <Col sm={4}>
                                            <i className="fas fa-truck-loading fa-5x" />
                                            <br />
                                            <br />
                                            <h4>Livraison</h4>
                                            <br />
                                            Aucun frais à ajouter pour les
                                            livraisons et retours à destination
                                            de la France Métropolitaine.
                                        </Col>
                                        <Col sm={4}>
                                            <i className="fas fa-check-double fa-5x" />
                                            <br />
                                            <br />
                                            <h4>Neuf et Authentique</h4>
                                            <br />
                                            Tous les produits vendus sur PrideOn
                                            sont authentifiés par nos experts
                                            avant de vous être envoyés.
                                        </Col>
                                        <Col sm={4}>
                                            <i className="fas fa-comments fa-5x" />
                                            <br />
                                            <br />
                                            <h4>SAV Français</h4>
                                            <br />
                                            Notre équipe est disponible par
                                            téléphone ou par mail du lundi au
                                            samedi de 10h à 20h.
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </section>
                    </Fragment>
                )}
            </div>
        );
    }
}

// export default FicheProduit;
