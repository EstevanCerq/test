import { useState, Fragment } from "react";
import CategoryList from "./categoryList";

const Categorie = () => {
    const [brand, setBrand] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = { brand };

        fetch("http://localhost:8000/api/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(category),
        }).then(() => {
            console.log("Categorie créé");
        });
    };

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <Fragment>
            <section id="categorie" style={{ padding: "5px 50px 40px 50px" }}>
                <h2>Créer votre marque</h2>
                <br />

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            placeholder="Nike"
                            required
                        />
                    </div>

                    <br />
                    <button className="btn btn-success" onClick={refreshPage}>
                        Créer votre marque
                    </button>
                </form>
            </section>

            <CategoryList />
        </Fragment>
    );
};

export default Categorie;
