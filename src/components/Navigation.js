import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setToken } from "../features/userSlice";

// Composant de navigation
// Ce composant représente la barre de navigation de l'application. Il affiche le logo de l'application et un lien pour se connecter ou se déconnecter.
// Il affiche également le nom de l'utilisateur connecté.
// Il utilise le hook useSelector pour accéder au store Redux et récupérer le token et le nom de l'utilisateur.
// Il utilise le hook useDispatch pour appeler l'action de déconnexion de l'utilisateur.
const Navigation = () => {
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogOut = () => {
    dispatch(setToken(null)); // Suppression du token du store Redux en le mettant à null
    localStorage.removeItem("token");
  };

  // Affichage de la barre de navigation
  // Ce composant affiche la barre de navigation de l'application.
  // Il affiche le logo de l'application et un lien pour se connecter ou se déconnecter.
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt=""
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {token ? (
        <div className="main-nav-item-position">
          <NavLink className="main-nav-item" to="/user">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            {userName}
          </NavLink>
          <NavLink className="main-nav-item" to="/" onClick={handleLogOut}>
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            Sign Out
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faCircleUser} className="icon" />
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
