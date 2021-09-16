import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
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

    changeHandler = (e) => {
        const stateName = e.target.files ? "image" : e.target.name;
        const value = e.target.files ? e.target.files[0] : e.target.value;
        this.setState({ [stateName]: value });
    };

    changeHandlerBrand (e) {
        this.setState({ brand: e.target.value });
    }

    async handleAddProduct(e) {
        const { name, brand, gender, description, date, price, image } =
            this.state;
        const data = JSON.stringify({
            name: name,
            brand: brand,
            gender: gender,
            description: description,
            date: date,
            price: price,
        });
        console.log(data);

        let productId = "";
        let imageIri = "";

        await axios({
            url: "http://localhost:8000/api/products",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //   authorization: 'your token'
            },
            data: data,
        })
            .then((res) => (productId = res.data.id))
            .catch((err) => err.response.data);

        let formdata = new FormData();
        formdata.append("file", image);

        await axios({
            url: "http://localhost:8000/api/media_objects",
            method: "POST",
            // headers: {
            // },
            data: formdata,
        })
            .then((res) => (imageIri = res.data["@id"]))
            .catch((err) =>
                this.setState({ error: err.res.data["hydra:description"] })
            );

        if (imageIri !== "" && productId !== "") {
            this.asignImageToProduct(productId, imageIri);
        }
    }

    asignImageToProduct(productId, imageIri) {
        axios({
            url: "http://localhost:8000/api/products/" + productId,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //   authorization: 'your token'
            },
            data: JSON.stringify({ image: imageIri }),
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.response.data));
    }

    //ne pas avoir de doublon dans le dropdown
    getUnique(arr, comp) {
        const unique = arr
            .map((e) => e[comp])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter((e) => arr[e])
            .map((e) => arr[e]);
        return unique;
    }

    refreshPage() {
        window.location.reload(false);
      }

    timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

     async onClick(e) {
        this.handleAddProduct(e);
        await this.timeout(5000); //for 5 sec delay
        this.refreshPage();
    }

    render() {
        const uniqueCategory = this.getUnique(this.state.items, "brand");

        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    {/* {error ? <div>{error}</div> : <div></div>} */}
                    <form onSubmit={this.handleAddProduct}>
                        <div className="form-group">
                            Modèle de votre paire :
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            Marque :<br />
                            <select
                                className="form-control"
                                name="brand"
                                value={this.state.brand}
                                onChange={this.changeHandler}
                            >
                                <option value="0">Choisir...</option>
                                {uniqueCategory.map((categories) => (
                                    <option
                                        key={categories.id}
                                        value={categories.brand}
                                    >
                                        {categories.brand}
                                    </option>
                                ))}
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
                                <option>Choisir ...</option>
                                <option>Homme</option>
                                <option>Femme</option>
                            </select>
                        </div>
                        <div className="form-group">
                            Description de votre produit :<br />
                            <textarea
                                name="description"
                                className="form-control"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            Date de sortie :<br />
                            <input
                                name="date"
                                className="form-control"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            Prix :<br />
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            Photo de votre produit :<br />
                            <input
                                type="file"
                                className="form-control-file"
                                name="image"
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={(e) => this.onClick(e)}
                        >
                            Créer votre produit
                        </button>
                    </form>
                </div>
            );
        }
    }
}

export default Create;
