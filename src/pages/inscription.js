import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./style/log.css";
import "../App.css";
import Swal from "sweetalert2";

const Inscription = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, username, password, name };

        fetch("http://localhost:8000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        }).then((response) => {
            if (response.status === 422) {
                Swal.fire({
                    icon: "error",
                    title: "",
                    text: "Un utilisateur à déjà ce pseudo ou cet email",
                    showConfirmButton: false,
                    timer: 2500,
                });
            } else {
                history.push("/connexion");
            }
        });
    };

    return (
        <Fragment>
            <section className="page-section bg-light" id="inscription">
                <div className="container">
                    <h2>Inscription</h2>
                    <small id="emailHelp" className="form-text text-muted">
                        Toutes vos données sont sécurisées et ne seront pas
                        partagées.
                    </small>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Prénom Nom</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Pseudo</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="jdoe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john.doe@github.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="··········"
                            />
                        </div>

                        <br />
                        <button className="btn btn-success">Inscription</button>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default Inscription;
