import React, { Component } from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

class About extends Component {
  constructor() {
    super();
    this.render();

    this.reliability =
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    this.respect =
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    this.service =
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    this.responsability =
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  }

  render() {
    return (
      <main className="about">
        <Banner className="banner banner__about" />
        <div className="about__dropdowns">
          <Dropdown type="text" name="Fiabilité" text={this.reliability} />
          <Dropdown type="text" name="Respect" text={this.respect} />
          <Dropdown type="text" name="Service" text={this.service} />
          <Dropdown type="text" name="Responsabilité" text={this.responsability} />
        </div>
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
}

export default About;
