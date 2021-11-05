import React from 'react';
import Card from './Card';
import { getHousingList } from '../data/dataManager';

class HousingsList extends React.Component {

  render() {
    const data = getHousingList();

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
