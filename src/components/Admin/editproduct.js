import React, { Component } from "react";
import axios from "axios";
import "./edit.css";

class Editproduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            brand: "",
            gender: "",
            description: "",
            date: "",
            price: "",
            image: null,
            error: "",
        };
    }

    changeHandler = (e) => {
        const stateName = e.target.files ? "image" : e.target.name;
        const value = e.target.files ? e.target.files[0] : e.target.value;
        this.setState({ [stateName]: value });
    };

    async updateProductHandler(e) {
        const { name, brand, gender, description, date, price } = this.state;
        const data = JSON.stringify({
            name: name || undefined,
            brand: brand || undefined,
            gender: gender || undefined,
            description: description || undefined,
            date: date || undefined,
            price: price || undefined,
        });
        console.log(data);

        let productId = this.props.match.params.id;

        await axios({
            url: `http://localhost:8000/api/products/${productId}`,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //   authorization: 'your token'
            },
            data: data,
        })
            .then((res) => (productId = res.data.id))
            .catch((err) => err.response.data);
            window.location.reload(false);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }

    fetchData = async (id) => {
        const url = `http://localhost:8000/api/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ product: data, loading: false });
        console.log(data);
    };

    render() {
        return (
            <div>
                {this.state.loading || !this.state.product ? (
                    <div>Chargement…</div>
                ) : (
                    <div className="ui main edit-product">
                        <h2 className="text-center">
                            Modifier le modèle {this.state.product.name}
                        </h2>
                        <form
                            className="ui form"
                            onSubmit={this.updateProductHandler}
                        >
                            <div className="field">
                                <label>Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    defaultValue={this.state.product.name}
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                Marque :<br />
                                <select
                                    className="form-control"
                                    name="brand"
                                    onChange={this.changeHandler}
                                >
                                    <option>{this.state.product.brand}</option>
                                    <option>Nike</option>
                                    <option>Jordan</option>
                                    <option>Adidas</option>
                                    <option>Yeezy</option>
                                    <option>New Balance</option>
                                    <option>Asics</option>
                                </select>
                            </div>
                            <div className="form-group">
                                Sexe :
                                <br />
                                <select
                                    className="form-control"
                                    name="gender"
                                    onChange={this.changeHandler}
                                >
                                    <option>{this.state.product.gender}</option>
                                    <option>Homme</option>
                                    <option>Femme</option>
                                </select>
                            </div>
                            <div className="form-group">
                                Description de votre produit :<br />
                                <textarea
                                    className="form-control"
                                    name="description"
                                    defaultValue={
                                        this.state.product.description
                                    }
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                Date de sortie :<br />
                                <input
                                    className="form-control"
                                    name="date"
                                    defaultValue={this.state.product.date}
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className="form-group">
                                Prix :<br />
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    defaultValue={this.state.product.price}
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={(e) => this.updateProductHandler(e)}
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
export default Editproduct;
