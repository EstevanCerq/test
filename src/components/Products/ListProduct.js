import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import "./products.css";

class ListeProduit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.gender !== prevProps.gender ||
            this.props.price !== prevProps.price
        ) {
            if (this.props.brand && !this.props.gender && !this.props.price) {
                fetch(
                    `http://localhost:8000/api/products?brand=${this.props.brand}`
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
                    );
            } else if (
                !this.props.brand &&
                this.props.gender &&
                !this.props.price
            ) {
                fetch(
                    `http://localhost:8000/api/products?gender=${this.props.gender}`
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
                    );
            } else if (
                (this.props.gender === "Femme" ||
                    this.props.gender === "Homme") &&
                this.props.price &&
                !this.props.brand
            ) {
                fetch(
                    `http://localhost:8000/api/products?gender=${this.props.gender}&price[between]=${this.props.price}`
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
                    );
            } else if (
                (this.props.gender !== "Femme" ||
                    this.props.gender !== "Homme") &&
                this.props.price &&
                !this.props.brand
            ) {
                fetch(
                    `http://localhost:8000/api/products?price[between]=${this.props.price}`
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
                    );
            } else if (
                (this.props.gender === "Femme" ||
                    this.props.gender === "Homme") &&
                !this.props.price
            ) {
                fetch(
                    `http://localhost:8000/api/products?brand=${this.props.brand}&gender=${this.props.gender}`
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
                    );
            } else if (
                (this.props.gender === "Femme" ||
                    this.props.gender === "Homme") &&
                this.props.price
            ) {
                fetch(
                    `http://localhost:8000/api/products?brand=${this.props.brand}&gender=${this.props.gender}&price[between]=${this.props.price}`
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
                    );
            } else if (
                (this.props.gender !== "Femme" ||
                    this.props.gender !== "Homme") &&
                this.props.price
            ) {
                fetch(
                    `http://localhost:8000/api/products?brand=${this.props.brand}&price[between]=${this.props.price}`
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
                    );
            } else {
                fetch("http://localhost:8000/api/products")
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
                    );
            }
        }
    }

    componentDidMount() {
        if (this.props.brand && !this.props.gender && !this.props.price) {
            fetch(
                `http://localhost:8000/api/products?brand=${this.props.brand}`
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
                );
        } else {
            fetch("http://localhost:8000/api/products")
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
                );
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else if (this.props.showOnlyThreeItems === true) {
            return (
                <ul style={{ display: "flex" }}>
                    {items.slice(0, 3).map((product, index) => (
                        <Fragment key={index}>
                            <div style={{ display: "inline", margin: "10px" }}>
                                <a
                                    href={`/product/${product.id}`}
                                    style={{ paddingRight: "20px" }}
                                >
                                    <Card style={{ width: "350px" }}>
                                        {product.image ? (
                                            <Card.Img
                                                variant="top"
                                                src={
                                                    "http://localhost:8000/products/" +
                                                    product.image.filePath
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
                                                {product.name}
                                            </Card.Title>
                                            <Card.Title className="card-title">
                                                {product.brand}
                                            </Card.Title>
                                            <Card.Text className="card-text">
                                                {product.price} €
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </div>
                        </Fragment>
                    ))}
                </ul>
            );
        } else {
            return (
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {items.map((product, index) => (
                        <Fragment key={index}>
                            <div style={{ display: "inline", padding: "2px" }}>
                                <a
                                    href={`/product/${product.id}`}
                                    style={{ paddingRight: "20px" }}
                                >
                                    <Card style={{ width: "350px" }}>
                                        {product.image ? (
                                            <Card.Img
                                                variant="top"
                                                src={
                                                    "http://localhost:8000/products/" +
                                                    product.image.filePath
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
                                                {product.name}
                                            </Card.Title>
                                            <Card.Title className="card-title">
                                                {product.brand}
                                            </Card.Title>
                                            <Card.Text className="card-text">
                                                {product.price} €
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </div>
                        </Fragment>
                    ))}
                </ul>
            );
        }
    }
}

export default ListeProduit;
