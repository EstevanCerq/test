import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/categories")
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

    deleteCategory(id, e) {
        axios
            .delete(`http://localhost:8000/api/categories/${id}`)
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
                            <th>Marque</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    {items.map((categories) => (
                        <tbody>
                            <td>{categories.brand}</td>

                            <td>
                                <span style={{ paddingRight: "5px" }} />
                                <button
                                    className="btn btn-danger"
                                    onClick={(e) =>
                                        this.deleteCategory(categories.id, e)
                                    }
                                >
                                    <i className="fas fa-trash-alt" />
                                </button>
                            </td>
                        </tbody>
                    ))}
                </Table>
            );
        }
    }
}

export default CategoryList;
