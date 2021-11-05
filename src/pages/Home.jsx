import React, { Component } from 'react';
import Banner from '../components/Banner';
import HousingsList from '../components/HousingsList';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <Banner className="banner banner__home" text="Chez vous, partout et ailleurs" />
        <HousingsList />
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }  
}

export default Home;
