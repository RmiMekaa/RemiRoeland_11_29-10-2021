import React, { Component } from 'react';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    return <div className={this.props.className}>{this.props.text ? <h1>{this.props.text}</h1> : null}</div>;
  }
}

export default Banner;
