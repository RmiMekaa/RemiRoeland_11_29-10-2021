import React from 'react';
import Summary from '../components/Summary';
import Owner from '../components/Owner';
import Rating from '../components/Rating';
import Dropdowns from '../components/Dropdowns';

class HousingDescription extends React.Component {

  render() {
    const { title, location, tags, host, rating, description, equipments } = this.props.data;

    return (
      <div className="housingDescription">
        <Summary title={title} location={location} tags={tags} />
        <aside>
          <Owner name={host.name} picture={host.picture} />
          <Rating rating={rating} />
        </aside>
        <Dropdowns description={description} equipments={equipments} />
      </div>
    );
  }
}

export default HousingDescription;
