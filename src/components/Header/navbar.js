import React, { Fragment } from "react";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./header.css";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

function Header() {
    const history = useHistory();
    function logOut() {
        if (localStorage.getItem("token")) {
            localStorage.clear();
            history.push("/connexion");
        } else {
            Swal.fire({
                icon: "error",
                title: "",
                text: "Tu n'es pas connecté",
                showConfirmButton: false,
                timer: 2500,
            });
        }
    }

    function currentUserRole() {
        if (
            localStorage.getItem("token") &&
            jwt_decode(localStorage.getItem("token")).roles[0] === "ROLE_ADMIN"
        ) {
            return true;
        } else {
            return false;
        }
    }

    function isLoggedIn() {
        if (localStorage.getItem("token")) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Fragment>
            <Navbar
                collapseOnSelect
                expand="md"
                bg="#161616"
                sticky="top"
                variant="dark"
            >
                <Navbar.Brand>
                    <a href="/" className="title-prideon nav-link">
                        PrideOn
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/nike">Nike</Nav.Link>
                        <Nav.Link href="/jordan">Air Jordan</Nav.Link>
                        <Nav.Link href="/yeezy">Yeezy</Nav.Link>
                        <Nav.Link href="/adidas">Adidas</Nav.Link>
                        <Nav.Link href="/stock">Notre stock</Nav.Link>
                    </Nav>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Item href="/panier" className="account">
                                <i className="fas fa-shopping-basket" />
                            </Dropdown.Item>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle
                                className="account"
                                id="dropdown-basic"
                            >
                                <i className="fas fa-user-circle opacite" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {!isLoggedIn() ? (
                                    <>
                                        <Dropdown.Item
                                            href="/connexion"
                                            className="links"
                                        >
                                            <i className="fas fa-sign-in-alt" />{" "}
                                            Connexion
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            href="/inscription"
                                            className="links"
                                        >
                                            <i className="fas fa-users" />{" "}
                                            Inscription
                                        </Dropdown.Item>
                                    </>
                                ) : null}
                                {isLoggedIn() ? (
                                    <>
                                        <Dropdown.Item
                                            href="/profil"
                                            className="links"
                                        >
                                            <i className="fas fa-user-circle" />{" "}
                                            Mon compte
                                        </Dropdown.Item>
                                    </>
                                ) : null}
                                {currentUserRole() ? (
                                    <Dropdown.Item
                                        href="/backoffice"
                                        className="links"
                                    >
                                        <i className="fas fa-tools" />{" "}
                                        Backfoffice
                                    </Dropdown.Item>
                                ) : null}
                                {isLoggedIn() ? (
                                    <>
                                        <hr />
                                        <Dropdown.Item
                                            className="links"
                                            onClick={logOut}
                                        >
                                            <i className="fas fa-sign-out-alt" />
                                            Déconnexion
                                        </Dropdown.Item>
                                    </>
                                ) : null}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default Header;
