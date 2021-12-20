import React from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

class AboutPage extends React.Component {

  render() {
    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const responsability = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
      <main className="about">
        <Banner className="banner banner__about" />
        <div className="about__dropdowns">
          <Dropdown type="text" name="Fiabilité" description={reliability} />
          <Dropdown type="text" name="Respect" description={respect} />
          <Dropdown type="text" name="Service" description={service} />
          <Dropdown type="text" name="Responsabilité" description={responsability} />
        </div>
      </main>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default AboutPage;
