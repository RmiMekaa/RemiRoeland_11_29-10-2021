import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props); // array of strings (image link)
    this.state = {
      counter : 0
    }
    this.nextMedia = this.nextMedia.bind(this);
    this.prevMedia = this.prevMedia.bind(this);
  }

  render() {
    return (
      <div className="carousel">
        {this.props.pictures.length > 1 ? (
          <div className="controls">
            <button className="button button__prev" onClick={this.prevMedia}></button>
            <span className="controls__counter">{this.state.counter +1}/{this.props.pictures.length}</span>
            <button className="button button__next" onClick={this.nextMedia}></button>
          </div>
        ) : null}
        <img src={this.props.pictures[this.state.counter]} alt=''></img>
      </div>
    )
  }

  prevMedia() {
    this.state.counter === 0 ? (
      this.setState({ counter : this.props.pictures.length -1 })
    ) : (
      this.setState({ counter : this.state.counter - 1 })
    )
  }
  nextMedia() {
    this.props.pictures.length -1 > this.state.counter ? (
      this.setState({ counter : this.state.counter + 1 })
    ) : (
      this.setState({ counter : 0 })
    )
  }
}

export default Carousel;
