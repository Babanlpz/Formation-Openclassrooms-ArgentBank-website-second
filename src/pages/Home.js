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
  return (
    <div>
      <Navigation />
      <Hero />
      <section className="features">
        <FeatureInfo
          image={"./img/icon-chat.png"}
          title={"You are our #1 priority"}
          description={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <FeatureInfo
          image={"./img/icon-money.png"}
          title={"More savings means higher rates"}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <FeatureInfo
          image={"./img/icon-security.png"}
          title={"Security you can trust"}
          description={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
