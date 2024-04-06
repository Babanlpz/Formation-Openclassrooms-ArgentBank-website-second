import React from "react";
import FeatureInfo from "../components/FeatureInfo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

// Page d'accueil
// Ce composant représente la page d'accueil de l'application.
// Il affiche la navigation, le héros, les fonctionnalités et le pied de page.
// Il est utilisé dans le routeur (Router) pour afficher la page d'accueil.
// Il ne prend pas de paramètre.
const Home = () => {
  // Utilisation d'un tableau pour stocker les données des fonctionnalités
  const featuresData = [
    {
      image: "./img/icon-chat.webp",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      image: "./img/icon-money.webp",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      image: "./img/icon-security.webp",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <div>
      <Navigation />
      <Hero />
      {/* Utilisation de la méthode map pour rendre les fonctionnalités */}
      <section className="features">
        {featuresData.map((feature, index) => (
          <FeatureInfo
            key={index} // Utilisation de l'index comme clé (amélioration possible si les données sont uniques)
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
