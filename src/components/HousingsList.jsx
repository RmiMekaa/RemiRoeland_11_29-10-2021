import React, { Component } from 'react';
import data from '../data/data.json';
import Card from './Card';

class HousingsList extends Component {
  render() {
    return (
      <div className="housingsList">
        {data.map(({ id, title, cover }) => (
          <Card key={id} title={title} cover={cover} id={id} />
        ))}
      </div>
    );
  }
}

export default HousingsList;
