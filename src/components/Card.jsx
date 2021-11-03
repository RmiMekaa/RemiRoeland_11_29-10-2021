import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    return (
      <Link className="housing_card" to={`/Housing/${this.props.id}`}>
        <h2>{this.props.title}</h2>
        <div className="gradient_layer"></div>
        <img src={this.props.cover} alt="housing"></img>
      </Link>
    );
  }
}

export default Card;
