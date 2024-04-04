import React from "react";


// Composant d'entrée
// Ce composant représente un champ de saisie. Il prend en paramètre une classe, un type, un identifiant et un nom de champ. pour le formulaire de connexion
// Il affiche un champ de saisie avec un label et une action associé à ce champ (ici, affichage du contenu)
// Ce composant est utilisé dans le formulaire de connexion (Login) ou pour ajouter des éléments au tableau (AddItem)
// Il est utilisé dans le formulaire de connexion (Login)
// Il est utilisé pour ajouter des éléments au tableau (AddItem)
const Input = ({ classnameInput, inputType, id, labelname }) => {
  return (
    <div className={`input-${classnameInput}`}>
      {" "}
      <label htmlFor={id}>{labelname}</label>
      <input type={inputType} id={id} />
    </div>
  );
};

export default Input;