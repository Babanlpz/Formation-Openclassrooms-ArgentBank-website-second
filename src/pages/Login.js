import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";


// Page de connexion
// Ce composant représente la page de connexion de l'application.
// Il affiche la navigation, le formulaire de connexion et le pied de page.
// Il est utilisé dans le routeur (Router) pour afficher la page de connexion.
const Login = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;