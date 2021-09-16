import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./style/log.css";
import "../App.css";
import Swal from "sweetalert2";

const Connexion = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };

        fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.message) {
                    console.log("message ", data.message);
                    Swal.fire({
                        icon: "error",
                        title: "",
                        text: data.message,
                        showConfirmButton: false,
                        timer: 2500,
                    });
                } else {
                    localStorage.setItem("token", data.token);
                    fetch(
                        `http://localhost:8000/api/users?username=${
                            jwt_decode(localStorage.getItem("token")).username
                        }`
                    )
                        .then((response) => response.json())
                        .then(
                            (result) => {
                                localStorage.setItem(
                                    "userId",
                                    result["hydra:member"][0].id
                                );
                            },
                            (error) => {
                                this.setState({
                                    isLoaded: true,
                                    error,
                                });
                            }
                        );
                    history.push("/");
                    window.location.reload(false);
                }
            });
    };

    return (
        <Fragment>
            {/* <Navbar /> */}
            <section className="page-section bg-light" id="connexion">
                <div className="container">
                    <h2>Connexion</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Pseudo</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="j.doe"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                Toutes vos données sont sécurisées et ne seront
                                pas partagées.
                            </small>
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
                        <button
                            type="submit"
                            className="btn btn-success text-left"
                            onClick={Connexion}
                        >
                            Se connecter
                        </button>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default Connexion;
