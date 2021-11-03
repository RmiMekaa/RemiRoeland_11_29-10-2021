import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Description from '../components/Description';
import data from '../data/data.json';

class Housing extends Component {
  constructor(props) {
    super(props);
    this.data = this.getData();
    this.render();
  }

  getData() {
    return data.find((housing) => housing.id === this.props.match.params.id);
  }
  
  render() {
    return (
      <main className="main_housing">
        <Carousel pictures={this.data.pictures} />
        <Description data={this.data} />
      </main>
    );
  }
}

export default Housing;
