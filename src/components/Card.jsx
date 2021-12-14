import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {

  render() {
    const { id, title, cover } = this.props;
    return (
      <Link className="housing_card" to={`/Housing/${id}`}>
        <h2>{title}</h2>
        <div className="gradient_layer"></div>
        <img src={cover} alt="housing" />
      </Link>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
