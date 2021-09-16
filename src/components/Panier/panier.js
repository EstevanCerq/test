import React, { Component, Fragment } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import StripeContainer from "../Stripe/StripeContainer";
import "../Panier/panier.css";

class Panier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {
                product: {},
            },
            showItem: false,
        };
    }

    addCommande(items) {
        items.map((panier, index) =>
            fetch(`http://localhost:8000/api/commandes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: "/api/users/" + localStorage.getItem("userId"),
                    product: "/api/products/" + panier.product.id,
                    size: panier.size,
                    status: "validée",
                    chiffreAffaire: panier.product.price,
                    createdAt: new Date().toISOString(),
                }),
            })
        );
        this.setState({
            showItem: true,
        });
    }

    componentDidMount() {
        fetch(
            `http://localhost:8000/api/paniers?user=/api/users/${localStorage.getItem(
                "userId"
            )}`
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result["hydra:member"],
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    DeleteFromCart(panierId) {
        fetch(`http://localhost:8000/api/paniers/${panierId}`, {
            method: "DELETE",
        }).then(
            fetch(
                `http://localhost:8000/api/paniers?user_id=${this.props.userId}`
            )
                .then((res) => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result["hydra:member"],
                        });
                    },
                    // Remarque : il est important de traiter les erreurs ici
                    // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                    // des exceptions provenant de réels bugs du composant.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error,
                        });
                    }
                )
        );
        this.forceUpdate();
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else if (!items[0]) {
            return (
                <>
                    <h2 className="text-center page-section">
                        Mon Panier <i className="fas fa-shopping-basket" />
                    </h2>
                    <hr />
                    <h1 className="text-center page-section">
                        Aucun produit dans votre panier
                    </h1>
                </>
            );
        } else {
            if (localStorage.getItem("token")) {
                const showItem = this.state.showItem;
                return (
                    <Fragment>
                        <Container>
                            <h2 className="text-center page-section">
                                Mon Panier{" "}
                                <i className="fas fa-shopping-basket" />
                            </h2>
                            {showItem ? (
                                <StripeContainer />
                            ) : (
                                <>
                                    <hr />
                                    <ul
                                        className="products"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {items.map((panier, index) => (
                                            <Fragment key={index}>
                                                <div
                                                    style={{
                                                        display: "inline",
                                                        margin: "10px",
                                                    }}
                                                >
                                                    <a
                                                        href={`/product/${panier.product.id}`}
                                                        style={{
                                                            paddingRight:
                                                                "20px",
                                                        }}
                                                    >
                                                        <Card
                                                            style={{
                                                                width: "350px",
                                                            }}
                                                        >
                                                            {panier.product
                                                                .image ? (
                                                                <Card.Img
                                                                    variant="top"
                                                                    src={
                                                                        "http://localhost:8000/products/" +
                                                                        panier
                                                                            .product
                                                                            .image
                                                                            .filePath
                                                                    }
                                                                    className="card-img-top"
                                                                />
                                                            ) : (
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            )}

                                                            <Card.Body className="card-body">
                                                                <Card.Title className="card-title">
                                                                    {
                                                                        panier
                                                                            .product
                                                                            .name
                                                                    }
                                                                </Card.Title>
                                                                <Card.Title className="card-title">
                                                                    {
                                                                        panier
                                                                            .product
                                                                            .brand
                                                                    }
                                                                </Card.Title>
                                                                <Card.Text className="card-text">
                                                                    Taille :{" "}
                                                                    {
                                                                        panier.size
                                                                    }
                                                                </Card.Text>
                                                                <Card.Text className="card-text">
                                                                    {
                                                                        panier
                                                                            .product
                                                                            .price
                                                                    }{" "}
                                                                    €
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </a>
                                                    <div
                                                        className="text-right"
                                                        style={{
                                                            paddingBottom:
                                                                "80px",
                                                        }}
                                                    >
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={this.DeleteFromCart.bind(
                                                                this,
                                                                panier.id
                                                            )}
                                                        >
                                                            Retirer du panier
                                                        </button>
                                                    </div>
                                                </div>
                                            </Fragment>
                                        ))}
                                    </ul>
                                    <hr />
                                    <div
                                        className="text-right"
                                        style={{ paddingBottom: "80px" }}
                                    >
                                        <button
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.addCommande(items)
                                            }
                                        >
                                            Poursuivre votre achat
                                        </button>
                                    </div>
                                </>
                            )}
                        </Container>
                    </Fragment>
                );
            } else {
                return (
                    <Fragment>
                        <Container>
                            <h2 className="text-center page-section">
                                Mon Panier{" "}
                                <i className="fas fa-shopping-basket" />
                            </h2>
                            <hr />
                            <h1 className="text-center page-section">
                                Connectez vous et ajouter des articles à votre
                                paniers
                            </h1>
                        </Container>
                    </Fragment>
                );
            }
        }
    }
}

export default Panier;
