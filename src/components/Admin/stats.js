import React, { Component, Fragment } from "react";
import Plot from "react-plotly.js";
import "./edit.css";

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/commandes")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data: data["hydra:member"] });
            });
    }

    transformDataCAByBrand(data) {
        let plot_data = [];

        let x = [];
        let y = [];
        if (data) {
            data.map((each) => {
                x.push(each.product.brand);
                y.push(each.chiffreAffaire);
            });
            plot_data["x"] = x;
            plot_data["y"] = y;

            return plot_data;
        } else {
            plot_data["x"] = 0;
            plot_data["y"] = 0;

            return plot_data;
        }
    }

    transformDataCAbyDay(data) {
        let plot_data = [];

        let x = [];
        let y = [];
        if (data) {
            data.map((each) => {
                x.push(each.createdAt);
                y.push(each.chiffreAffaire);
            });
            plot_data["x"] = x;
            plot_data["y"] = y;

            return plot_data;
        } else {
            plot_data["x"] = 0;
            plot_data["y"] = 0;

            return plot_data;
        }
    }

    render() {
        console.log("data ", this.state.data);
        return (
            <Fragment>
                <div>
                    <Plot
                        data={[
                            {
                                type: "bar",
                                x: this.transformDataCAByBrand(this.state.data)[
                                    "x"
                                ],
                                y: this.transformDataCAByBrand(this.state.data)[
                                    "y"
                                ],
                                marker: { color: "#ed022d" },
                            },
                        ]}
                        layout={{
                            width: 1600,
                            height: 500,
                            title: "Chiffre d'affaire par marque",
                        }}
                    />
                </div>
                <div>
                    <Plot
                        data={[
                            {
                                type: "bar",
                                x: this.transformDataCAbyDay(this.state.data)[
                                    "x"
                                ],
                                y: this.transformDataCAbyDay(this.state.data)[
                                    "y"
                                ],
                                marker: { color: "#ed022d" },
                            },
                        ]}
                        layout={{
                            width: 1600,
                            height: 500,
                            title: "Chiffre d'affaire par jour",
                        }}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Stats;
