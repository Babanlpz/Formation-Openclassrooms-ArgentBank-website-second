import React from "react";


// Composant d'information sur une fonctionnalité
// Ce composant représente une information sur une fonctionnalité. Il affiche une icône, un titre et une description. de l'application.
// Il prend en paramètre une image, un titre et une description.
// Il affiche ces informations dans une section.
const FeatureInfo = ({ image, title, description }) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={image} alt="" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureInfo;