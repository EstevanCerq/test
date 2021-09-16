import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

class GestionProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
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

    deleteProduct(id, e) {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            window.location.reload(false);
            //const del = this.state.product.filter(product => product.id !== id);
            //this.setState({ del });
        });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <Table>
                    <thead>
                        <tr>
                            <th>Photo produit</th>
                            <th>Modèle</th>
                            <th>Marque</th>
                            <th>Sexe</th>
                            <th>Prix</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {items.map((product, index) => (
                        <tbody key={index}>
                            <tr>
                                {product.image ? (
                                    <td>
                                        <img
                                            src={
                                                "http://localhost:8000/products/" +
                                                product.image.filePath
                                            }
                                            alt="produitImage"
                                            className="img-edit"
                                        />
                                    </td>
                                ) : (
                                    <td></td>
                                )}
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.gender}</td>
                                <td>{product.price} €</td>
                                <td>
                                    <a href={`/product/${product.id}`}>
                                        <button className="btn btn-success">
                                            <i className="fas fa-eye" />
                                        </button>
                                    </a>
                                    <span style={{ paddingRight: "5px" }} />
                                    <a href={`/edit/${product.id}`}>
                                        <button className="btn btn-warning">
                                            <i
                                                className="fas fa-pen"
                                                style={{ color: "white" }}
                                            />
                                        </button>
                                    </a>
                                    <span style={{ paddingRight: "5px" }} />
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) =>
                                            this.deleteProduct(product.id, e)
                                        }
                                    >
                                        <i className="fas fa-trash-alt" />
                                    </button>
                                </td>
                                {console.log(product.image)}
                            </tr>
                        </tbody>
                    ))}
                </Table>
            );
        }
    }
}

export default GestionProduits;
