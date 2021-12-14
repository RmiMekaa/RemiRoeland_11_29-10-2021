import React from 'react';
import Carousel from '../components/Carousel';
import HousingDescription from '../components/HousingDescription';
import { Redirect } from "react-router-dom";
import { getHousingData } from "../data/dataManager";

class HousingPage extends React.Component {

  render() {
    const data = getHousingData(this.props.match.params.id);
    if (data === null) return <Redirect to="/errorPage" />

    return (
      <main className="housing">
        <Carousel pictures={data.pictures} />
        <HousingDescription data={data} />
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default HousingPage;
