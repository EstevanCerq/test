import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import ListeProduit from "../../components/Products/ListProduct";
import Filters from "../../components/Filters/filters";
import "../style/productpage.css";

class NikeProducts extends React.Component {
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
        <ListeProduit brand={"nike"} gender={dataGender} price={dataPrice} />
      );
    } else if (dataGender && !dataPrice) {
      ListeProduitFiltered = (
        <ListeProduit brand={"nike"} gender={dataGender} />
      );
    } else if (!dataGender && dataPrice) {
      ListeProduitFiltered = <ListeProduit brand={"nike"} price={dataPrice} />;
    } else {
      ListeProduitFiltered = <ListeProduit brand={"nike"} />;
    }
    return (
      <Fragment>
        <section id="bandeau">
          <img src="assets/bandeau/nike.png" alt="Nike Bandeau" />
        </section>
        <Container fluid className="text-center bg-light title-filters">
          <h2>Nike</h2>
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

export default NikeProducts;
