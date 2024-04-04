import React from "react";


// Composant de héros
// Ce composant représente le héros de la page d'accueil. Il affiche un titre et une description.
// Il affiche également un bouton pour ouvrir un compte.
const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!.</p>
      </section>
    </div>
  );
};

export default Hero;