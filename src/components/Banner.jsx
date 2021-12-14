import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {

  render() {
    const { className, text } = this.props
    return (
      <div className={className}>
        {text ? <h1>{text}</h1> : null}
      </div>
    )
  }
}

Banner.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};


export default Banner;
