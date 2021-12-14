import React from 'react';
import Carousel from '../components/Carousel';
import Summary from '../components/Summary';
import Owner from '../components/Owner';
import Rating from '../components/Rating';
import Dropdowns from '../components/Dropdowns';
import { Redirect } from "react-router-dom";
import { getHousingData } from "../data/dataManager";

class HousingPage extends React.Component {

  render() {
    const data = getHousingData(this.props.match.params.id);
    if (data === null) return <Redirect to="/errorPage" />

    return (
      <main className="housing">
        <Carousel pictures={data.pictures} />
        <div className="housing__description">
          <Summary title={data.title} location={data.location} tags={data.tags} />
          <aside className="housing__aside">
            <Owner name={data.host.name} picture={data.host.picture} />
            <Rating rating={data.rating} />
          </aside>
        </div>
        <Dropdowns description={data.description} equipments={data.equipments} />
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default HousingPage;
