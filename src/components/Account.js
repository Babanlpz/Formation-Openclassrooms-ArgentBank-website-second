import React from "react";
import Button from "../components/Button";

// Composants de la page d'accueil
// Ce composant représente un compte bancaire
// Il prend en paramètre un titre, un montant, une description et un nombre de comptes associés.
// Il affiche ces informations dans une section
// Il affiche également un bouton pour afficher les transactions
// Ce composant est utilisé dans la page d'accueil (Home)
const Account = ({ title, amount, description, number }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title}(x{number})
        </h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button title="View transactions" className={"transaction-button"} />
      </div>
    </section>
  );
};

export default Account;
