import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { setToken, userLoginRequest } from "../features/userSlice";

// Composant de formulaire de connexion
// Ce composant représente le formulaire de connexion de l'application.
// Il affiche un formulaire avec des champs pour l'adresse e-mail et le mot de passe.
// Il affiche également un bouton pour soumettre le formulaire.
// Il utilise le hook useDispatch pour appeler l'action de connexion de l'utilisateur.
// Il utilise le hook useNavigate pour naviguer vers une autre page après la connexion de l'utilisateur.
// Il utilise le hook useState pour gérer l'état du formulaire et les erreurs de connexion.
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMeisChecked, setRememberMeisChecked] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    try {
      const res = await dispatch(userLoginRequest(formData));
      const { token } = res.payload.body; // Utilisation de la déstructuration pour extraire le token de la réponse de la requête d'authentification.

      dispatch(setToken(token)); // Mise à jour du store Redux avec le token

      // Stockage du token dans le localStorage si l'utilisateur a coché "Remember me", sinon, le token est stocké dans le store Redux.
      if (token && rememberMeisChecked) {
        localStorage.setItem("token", token);
      }

      navigate("/user");
    } catch (error) {
      // Affichage des messages d'erreur appropriés
      if (email === "" || password === "") {
        setError("Please fill in all the required fields.");
      } else {
        setError("Email or password incorrect");
      }
    }
  };

  // Affichage du formulaire de connexion
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Utilisation de onSubmit pour soumettre le formulaire */}
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={
              email
            } /* Utilisation de la valeur contrôlée pour le champ email */
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={
              password
            } /* Utilisation de la valeur contrôlée pour le champ mot de passe */
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">Remember me</label>
          <input
            type="checkbox"
            id="remember-me"
            checked={
              rememberMeisChecked
            } /* Utilisation de checked pour gérer l'état de la case à cocher */
            onChange={() => setRememberMeisChecked(!rememberMeisChecked)}
          />
        </div>
        <Button
          title="Sign In"
          className={"sign-in-button"}
          type="submit" /* Utilisation de type="submit" pour le bouton de soumission */
        />
      </form>
    </section>
  );
};

export default SignInForm;
