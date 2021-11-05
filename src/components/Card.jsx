import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {

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

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};


export default Card;
