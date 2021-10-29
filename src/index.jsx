import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Housing">
          <Housing />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
