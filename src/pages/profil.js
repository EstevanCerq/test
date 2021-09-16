import React, { Component, Fragment } from "react";

class MonCompte extends Component {
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <Fragment>
                    {items.map((user) => (
                        <div
                            className="text-center"
                            style={{ padding: "50px" }}
                        >
                            <h5>Bienvenue {user.name}</h5>
                            <h6>Adresse mail : {user.email}</h6>
                        </div>
                    ))}
                </Fragment>
            );
        }
    }
}

export default MonCompte;
