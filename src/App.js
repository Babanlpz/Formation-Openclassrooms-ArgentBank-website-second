import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { useDispatch, useSelector } from "react-redux";
import {
  setToken,
  userProfileData,
  setFirstName,
  setLastName,
  setUserName,
} from "./features/userSlice";

// Composant racine de l'application
// Ce composant représente le composant racine de l'application. Il utilise le composant BrowserRouter pour gérer la navigation dans l'application.
// Il utilise le hook useDispatch pour appeler l'action de récupération des données du profil de l'utilisateur.. Il est responsable d'appeler les actions Redux pour récupérer la data utilis
// Il utilise le hook useSelector pour accéder au store Redux et récupérer le token de l'utilisateur.
// Il utilise le hook useEffect pour appeler l'action de récupération des données du profil de l'utilisateur lorsqu'un token est disponible.
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  // Appel de l'action de récupération des données du profil de l'utilisateur lorsqu'un token est disponible

  useEffect(() => {
    // Si un token est disponible, récupération des données du profil de l'utilisateur à partir du serveur
    if (token) {
      // récupération des données du profil de l'utilisateur à partir du serveur
      dispatch(userProfileData()).then((resultAction) => {
        // extrait les données du profil de la réponse
        const { firstName, lastName, userName } = resultAction.payload.body;

        // mise à jour le store Redux avec les données du profil
        dispatch(setFirstName(firstName));
        dispatch(setLastName(lastName));
        dispatch(setUserName(userName));
      });
    }
  }, [token, dispatch]);

  // Affichage des routes de l'application
  // Ce composant affiche les routes de l'application à l'aide du composant BrowserRouter.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
