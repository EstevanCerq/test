import React, { Component } from "react";
import axios from "axios";
import "./edit.css";

class Edituser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            email: "",
            error: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name: e.target.value });
      }

      handleChangeUsername(e) {
        this.setState({ username: e.target.value });
      }

      handleChangeEmail(e) {
        this.setState({ email: e.target.value });
      }

    async updateUserHandler(e) {
        const { name, username, email } = this.state;
        const data = JSON.stringify({
            name: name || undefined,
            username: username || undefined,
            email: email || undefined,
        });
        console.log(data);

        let userId = this.props.match.params.id;

        await axios({
            url: `http://localhost:8000/api/users/${userId}`,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //   authorization: 'your token'
            },
            data: data,
        })
            .then((res) => (userId = res.data.id))
            .catch((err) => err.response.data);
            window.location.reload(false);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }

    fetchData = async (id) => {
        const url = `http://localhost:8000/api/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ user: data, loading: false });
        console.log(data);
    };

    render() {
        return (
            <div>
                {this.state.loading || !this.state.user ? (
                    <div>Chargement…</div>
                ) : (
                    <div className="ui main edit-product">
                        <h2 className="text-center">
                            Modifier le user {this.state.user.name}
                        </h2>
                        <form
                            className="ui form"
                            onSubmit={this.updateProductHandler}
                        >
                            <div className="form-group">
                                <label>Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    defaultValue={this.state.user.name}
                                    onChange={this.handleChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Pseudo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    defaultValue={this.state.user.username}
                                    onChange={this.handleChangeUsername}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    defaultValue={this.state.user.email}
                                    onChange={this.handleChangeEmail}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={(e) => this.updateUserHandler(e)}
                            >
                                Update
                            </button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}
export default Edituser;
