import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserName, setUserName } from "../features/userSlice";
import Button from "./Button";

// Composant de modal de modification du nom d'utilisateur
// Ce composant représente une fenêtre modale qui permet à l'utilisateur de modifier son nom d'utilisateur.
// Il affiche un formulaire avec un champ pour le nouveau nom d'utilisateur.
// Il affiche également un bouton pour soumettre le formulaire et un bouton pour fermer la fenêtre modale.
// Il prend en paramètre une fonction onClose qui ferme la fenêtre modale.
// Il utilise le hook useState pour gérer l'état de la fenêtre modale et le nouveau nom d'utilisateur.
// Il utilise le hook useDispatch pour appeler l'action de modification du nom d'utilisateur.
const EditUsernameModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const dispatch = useDispatch();

  // Gestion de la soumission du formulaire de modification du nom d'utilisateur
  // Cette fonction est appelée lorsque l'utilisateur soumet le formulaire de modification du nom d'utilisateur.
  // Elle vérifie si un nouveau nom d'utilisateur a été saisi, puis met à jour le store Redux avec le nouveau nom d'utilisateur et lance une action pour effectuer la modification du nom d'utilisateur côté serveur.
  // Elle affiche un message d'erreur si le champ du nouveau nom d'utilisateur est vide.
  // Sinon, elle appelle l'action de modification du nom d'utilisateur et ferme la fenêtre modale.
  const handleUsernameSubmit = () => {
    if (newUserName.trim() !== "") {
      dispatch(setUserName(newUserName)); // Si un nouveau nom d'utilisateur est saisi, mise à jour le store Redux avec le nouveau nom.
      dispatch(editUserName()); // Lance une action pour effectuer la modification du nom d'utilisateur côté serveur.
      closeModal();
    } else if (newUserName.trim() === "") {
      setError("Please fill in all the required fields."); // Si le champ du nouveau nom d'utilisateur est vide, affiche un message d'erreur.
    }
  };

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  // Affichage de la fenêtre modale de modification du nom d'utilisateur
  // Ce composant affiche une fenêtre modale de modification du nom d'utilisateur lorsqu'il est ouvert.
  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <dialog open>
            <div className="modal-background">
              <FontAwesomeIcon icon={faUserPen} className="icon" />
              <h1>Edit User infos</h1>
              <form action="" className="modal-form">
                <div className="modal-input-wrapper">
                  <label htmlFor="username">User name:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="modal-input"
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                </div>{" "}
                <div className="modal-input-wrapper">
                  <label htmlFor="firstName">First name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={firstName}
                    className="modal-input"
                    disabled
                  />
                </div>{" "}
                <div className="modal-input-wrapper ">
                  <label htmlFor="lastName">Last name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="modal-input"
                    placeholder={lastName}
                    disabled
                  />
                </div>
              </form>{" "}
              {error && <p className="error-message">{error}</p>}{" "}
              <div className="modal-button-flex">
                <Button
                  title="Save"
                  className={"transaction-button modal-button"}
                  onClick={handleUsernameSubmit}
                />{" "}
                <Button
                  title="Cancel"
                  className={"transaction-button modal-button"}
                  onClick={closeModal}
                />
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default EditUsernameModal;
