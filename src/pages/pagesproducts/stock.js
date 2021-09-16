import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import ListeProduit from "../../components/Products/ListProduct";
import Filters from "../../components/Filters/filters";
import "../style/productpage.css";

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataGender: null,
            dataPrice: null,
        };
    }

    handleCallbackGender = (gender) => {
        this.setState({ dataGender: gender });
    };

    handleCallbackPrice = (price) => {
        this.setState({ dataPrice: price });
    };

    handleCallbackNoFilter = () => {
        this.setState({ dataPrice: null });
        this.setState({ dataGender: null });
    };

    render() {
        const { dataGender } = this.state;
        const { dataPrice } = this.state;
        let ListeProduitFiltered;
        if (dataGender && dataPrice) {
            ListeProduitFiltered = (
                <ListeProduit gender={dataGender} price={dataPrice} />
            );
        } else if (dataGender && !dataPrice) {
            ListeProduitFiltered = <ListeProduit gender={dataGender} />;
        } else if (!dataGender && dataPrice) {
            ListeProduitFiltered = <ListeProduit price={dataPrice} />;
        } else {
            ListeProduitFiltered = <ListeProduit />;
        }
        return (
            <Fragment>
                <section id="bandeau">
                    <img src="assets/bandeau/stock.png" alt="Stock Bandeau" />
                </section>
                <Container fluid className="text-center bg-light title-filters">
                    <h2>Notre stock</h2>
                    <Filters
                        parentCallbackGender={this.handleCallbackGender}
                        parentCallbackPrice={this.handleCallbackPrice}
                        parentCallbackNoFilter={this.handleCallbackNoFilter}
                    />
                </Container>
                <Container className="text-center products">
                    <br />
                    {ListeProduitFiltered}
                </Container>
            </Fragment>
        );
    }
}

export default Stock;
