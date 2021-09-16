import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

class EditUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/users")
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

    deleteUser(id, e) {
        axios.delete(`http://localhost:8000/api/users/${id}`)
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
                            <th>#</th>
                            <th>Nom</th>
                            <th>Pseudo</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {items.map((user, index) => (
                        <tbody key={index}>
                            <Fragment>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <span style={{ paddingRight: "5px" }} />
                                        <a href={`/edit/user/${user.id}`}>
                                        <button className="btn btn-warning">
                                            <i
                                                className="fas fa-pen"
                                                style={{ color: "white" }}
                                            />
                                        </button>
                                    </a>
                                        <span style={{ paddingRight: "5px" }} />
                                        <button className="btn btn-danger"
                                        onClick={(e) =>
                                            this.deleteUser(user.id, e)
                                        }
                                        >
                                            <i className="fas fa-trash-alt" />
                                        </button>
                                    </td>
                                </tr>
                            </Fragment>
                        </tbody>
                    ))}
                </Table>
            );
        }
    }
}

export default EditUsers;
