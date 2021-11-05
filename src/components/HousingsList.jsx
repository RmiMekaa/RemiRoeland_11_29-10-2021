import React from 'react';
import Card from './Card';
import { getHousingList } from '../data/dataManager';

class HousingsList extends React.Component {

  constructor(){
    super()
    this.data = getHousingList();
  }

  render() {
    return (
      <div className="housingsList">
        {this.data.map(({ id, title, cover }) => (
          <Card key={id} title={title} cover={cover} id={id} />
        ))}
      </div>
    );
  }
}

export default HousingsList;
