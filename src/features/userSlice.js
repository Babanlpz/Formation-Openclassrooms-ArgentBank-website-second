import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Ce code crée un "slice" Redux pour gérer les données utilisateur
// et définit des actions synchrones et asynchrones pour gérer les opérations liées à l'utilisateur.
// Création d'un slice pour gérer les données utilisateur
// Un slice est un objet qui contient des réducteurs et des actions pour gérer un état dans Redux.
// Un slice est créé à l'aide de la fonction createSlice de Redux Toolkit.
// La fonction createSlice prend un objet avec trois propriétés :
// name: nom du slice (utilisé uniquement pour le débugging)
// initialState: valeur initiale de l'état du slice
// reducers: un objet contenant des fonctions de réduction (actions) pour mettre à jour l'état du slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || "", // récupération du token depuis le localStorage s'il est présent, sinon initialisation avec une chaîne vide.
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

//  Création d'une action asynchrone pour gérer la connexion de l'utilisateur
//  Une action asynchrone est une fonction qui effectue une requête asynchrone (par exemple, une requête HTTP) et renvoie une promesse.
//  Les actions asynchrones sont créées à l'aide de la fonction createAsyncThunk de Redux Toolkit.
//  Elle prend en paramètre une clé unique pour identifier l'action, une fonction asynchrone qui effectue la requête, et un objet de configuration optionnel.
export const userLoginRequest = createAsyncThunk(
  "user/userLogin",
  async (formData) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();

    return data;
  }
);

//  Création d'une action asynchrone pour gérer l'inscription de l'utilisateur
// Une action asynchrone est une fonction qui effectue une requête asynchrone (par exemple, une requête HTTP) et renvoie une promesse.
export const userProfileData = createAsyncThunk(
  "user/userProfileData",
  async (_, { getState }) => {
    const { token } = getState().user; // récupération du token dans le store
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userProfileData = await response.json();

    return userProfileData;
  }
);

//  Création d'une action asynchrone pour gérer la modification du nom d'utilisateur
export const editUserName = createAsyncThunk(
  "user/editUserName",
  async (_, { getState }) => {
    const { userName, token } = getState().user; // récupération de nom utilisateur et du token
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    const editUserName = await response.json();

    return editUserName;
  }
);

export const { setToken, setFirstName, setLastName, setUserName } =
  userSlice.actions;
export default userSlice.reducer;
