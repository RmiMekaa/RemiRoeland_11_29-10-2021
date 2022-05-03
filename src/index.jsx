import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import HousingPage from './pages/HousingPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/RemiRoeland_11_29-10-2021/" exact >
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={HomePage} />
        <Route path="/Housing/:id" component={HousingPage} />
        <Route path="/About" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
