import React from "react";
import { Form, Button } from "react-bootstrap";
import "./filters.css";

class Filters extends React.Component {
  constructor() {
    super();
    this.state = { selectPrice: "" };
    this.state = { selectGender: "" };
  }

  onTriggerGender = (event) => {
    this.props.parentCallbackGender(event.target.value);
    this.setState({ selectGender: event.target.value });
    event.preventDefault();
  };

  onTriggerPrice = (event) => {
    this.props.parentCallbackPrice(event.target.value);
    this.setState({ selectPrice: event.target.value });
    event.preventDefault();
  };

  onTriggerNoFilter = (event) => {
    this.props.parentCallbackNoFilter(event.target.value);
    event.preventDefault();
    this.setState({ selectPrice: "" });
    this.setState({ selectGender: "" });
  };

  render() {
    return (
      <Form inline className="filters text-center">
        <div className="row">
          <Form.Label
            className="my-1 mr-2"
            htmlFor="inlineFormCustomSelectPref"
          >
            Sexe :
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={this.state.selectGender}
            custom
            onChange={this.onTriggerGender.bind(this)}
          >
            <option value="0">Choisir...</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </Form.Control>
        </div>
        <div className="row">
          <Form.Label
            className="my-1 mr-2"
            htmlFor="inlineFormCustomSelectPref"
          >
            Prix :
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={this.state.selectPrice}
            custom
            onChange={this.onTriggerPrice.bind(this)}
          >
            <option value="0">Choisir...</option>
            <option value="0..100">0 - 100€</option>
            <option value="100..200">100 - 200€</option>
            <option value="200..300">200 - 300€</option>
            <option value="300..400">300 - 400€</option>
            <option value="400..5000">400€ et +</option>
          </Form.Control>
        </div>
        <Button
          variant="dark"
          type="submit"
          className="my-1"
          onClick={this.onTriggerNoFilter.bind(this)}
        >
          Enlever les filtres
        </Button>
      </Form>
    );
  }
}

export default Filters;
