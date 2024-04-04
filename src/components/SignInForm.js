import React, { useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setToken, userLoginRequest } from "../features/userSlice";
import { useNavigate } from "react-router-dom";


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


    // Gestion de la soumission du formulaire de connexion
    // Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de connexion.
    try {
      const res = await dispatch(userLoginRequest(formData));
      const resData = res.payload;
      const token = resData.body.token; // récupération du token de la réponse de la requête d'authentification.

      dispatch(setToken(token)); // mise à jour le store Redux avec le token

      // Si l'utilisateur a coché la case "Remember me", le token est stocké dans le localStorage.
      if (token && rememberMeisChecked) {
        navigate("/user");
        localStorage.setItem("token", token);
        // Sinon, le token est stocké dans le store Redux.
      } else if (token && !rememberMeisChecked) {
        navigate("/user");
      }
      // Si la requête d'authentification échoue, un message d'erreur est affiché.
    } catch (error) {
      if (email === "" || password === "") {
        setError("Please fill in all the required fields.");
      // Si l'adresse e-mail ou le mot de passe est incorrect, un message d'erreur est affiché.
      } else {
        setError("Email or password incorrect");
      }
    }
  };

  // Affichage du formulaire de connexion
  // Ce composant affiche le formulaire de connexion de l'application.
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>
      {error && <p className="error-message">{error}</p>}{" "}
      <form>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">Remember me</label>
          <input
            type="checkbox"
            id="remember-me"
            onChange={() => setRememberMeisChecked(!rememberMeisChecked)}
          />
        </div>
        <Button
          title="Sign In"
          className={"sign-in-button"}
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};

export default SignInForm;