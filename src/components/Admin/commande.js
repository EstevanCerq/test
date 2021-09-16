import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Commande extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/commandes?order[createdAt]")
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else if (items) {
            return (
                <Table>
                    <thead>
                        <tr>
                            <th>Photo produit</th>
                            <th>Modèle</th>
                            <th>Marque</th>
                            <th>Client</th>
                            <th>état</th>
                            <th>Chiffre d'affaire</th>
                            <th>Crée</th>
                        </tr>
                    </thead>
                    {items.map((commande, index) => (
                        <tbody key={index}>
                            <tr>
                                {commande.product.image ? (
                                    <td>
                                        <img
                                            src={
                                                "http://localhost:8000/products/" +
                                                commande.product.image.filePath
                                            }
                                            alt="produitImage"
                                            className="img-edit"
                                        />
                                    </td>
                                ) : (
                                    <td></td>
                                )}
                                <td>{commande.product.name}</td>
                                <td>{commande.product.brand}</td>
                                <td>{commande.user.email}</td>
                                <td>{commande.status}</td>
                                <td>{commande.chiffreAffaire} €</td>
                                <td>
                                    {new Date(
                                        commande.createdAt
                                    ).toLocaleDateString()}
                                    <br />
                                    {new Date(
                                        commande.createdAt
                                    ).toLocaleTimeString()}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            );
        } else {
            return null;
        }
    }
}

export default Commande;
