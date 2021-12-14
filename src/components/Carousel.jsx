import React from 'react';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.nextMedia = this.nextMedia.bind(this);
    this.prevMedia = this.prevMedia.bind(this);
  }

  render() {
    const { pictures } = this.props;
    return (
      <div className="carousel">
        {pictures.length > 1 ? (
          <div className="controls">
            <button className="button button__prev" onClick={this.prevMedia}></button>
            <span className="controls__counter">{this.state.counter + 1}/{pictures.length}</span>
            <button className="button button__next" onClick={this.nextMedia}></button>
          </div>
        ) : null}
        <img src={pictures[this.state.counter]} alt='' />
      </div>
    )
  }

  prevMedia() {
    this.state.counter === 0 ? (
      this.setState({ counter: this.props.pictures.length - 1 })
    ) : (
      this.setState({ counter: this.state.counter - 1 })
    )
  }
  nextMedia() {
    this.props.pictures.length - 1 > this.state.counter ? (
      this.setState({ counter: this.state.counter + 1 })
    ) : (
      this.setState({ counter: 0 })
    )
  }
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string), // Image Links
};

export default Carousel;
