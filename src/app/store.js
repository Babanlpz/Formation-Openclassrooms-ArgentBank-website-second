import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";


// Configuration du store Redux avec les reducers et middlewares
// Cette fonction configure le store Redux avec les reducers et middlewares nécessaires pour gérer l'état de l'application.
export default configureStore({
  reducer: {
    user: userReducer,
  },
});