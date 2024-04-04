import React from "react";


// Composant de bouton
// Ce composant représente un bouton qui peut être cliqué. Il affiche le texte passé en paramètre et exécute la fonction onClick lorsqu'il est cliqué.
// Il prend en paramètre un titre, une classe et une fonction onClick
// Il affiche un bouton avec le titre et la classe passés en paramètre
const Button = ({ title, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;