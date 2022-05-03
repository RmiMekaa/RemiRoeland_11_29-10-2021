import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import HousingPage from './pages/HousingPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import { HashRouter, Route, Switch } from 'react-router-dom'; //Use HashRouter instead of BrowserRouter to handle routing in github page.
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Housing/:id" component={HousingPage} />
        <Route path="/About" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
