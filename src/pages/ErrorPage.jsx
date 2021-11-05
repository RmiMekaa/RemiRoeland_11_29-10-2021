import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
  render() {
    return (
      <main className="errorPage">
        <h1 className="errorPage__heading">404</h1>
        <span className="errorPage__text">Oups! La page que vous demandez n'existe pas.</span>
        <Link className="errorPage__link" to="/">Retourner sur la page d'accueil</Link>
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default ErrorPage;
