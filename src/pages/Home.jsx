import React, { Component } from 'react';
import Banner from '../components/Banner';
import HousingsList from '../components/HousingsList';

class Home extends Component {
  render() {
    return (
      <main className="main_home">
        <Banner className="banner banner__home" text="Chez vous, partout et ailleurs" />
        <HousingsList />
      </main>
    );
  }
}

export default Home;
