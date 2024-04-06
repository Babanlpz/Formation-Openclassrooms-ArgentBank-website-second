import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import Button from "../components/Button";
import EditUsernameModal from "../components/EditUsernameModal";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

// Page utilisateur
// Ce composant représente la page utilisateur de l'application.
// Il affiche la navigation, les informations de l'utilisateur et le pied de page.
// Il est utilisé dans le routeur (Router) pour afficher la page utilisateur.
// Il ne prend pas de paramètre.

// Le composant User est une page qui affiche les informations de l'utilisateur connecté. Il affiche également les comptes bancaires de l'utilisateur. Il utilise le composant Account pour afficher les comptes bancaires. Il utilise également le composant EditUsernameModal pour permettre à l'utilisateur de modifier son nom d'utilisateur.
// Le composant User utilise le hook useSelector pour récupérer les informations de l'utilisateur connecté. Il utilise également le hook useEffect pour rediriger l'utilisateur vers la page d'accueil s'il n'est pas connecté.
// Le composant User utilise le hook useNavigate pour rediriger l'utilisateur vers la page d'accueil s'il n'est pas connecté.
// Le composant User utilise le composant Navigation pour afficher la navigation de l'application. Il utilise également le composant Footer pour afficher le pied de page de l'application.
const User = () => {
  const userName = useSelector((state) => state.user.userName);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    // redirection vers la page d'acceuil en cas d'absence du token
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const [handleModal, setHandleModal] = React.useState(false);

  const toggleModal = () => {
    setHandleModal((prev) => !prev);
  };

  return (
    <div className="page">
      <Navigation />
      <div className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back <br></br>
            {userName}!
          </h1>{" "}
          <Button
            title="Edit name"
            className={"edit-button"}
            onClick={toggleModal}
          />
          {handleModal && <EditUsernameModal onClose={toggleModal} />}
        </div>
        <Account
          title={"Argent Bank Checking "}
          number={8349}
          amount={"$2,082.79"}
        />
        <Account
          title={"Argent Bank savings "}
          number={6712}
          amount={"$10,928.42"}
        />
        <Account
          title={"Argent Bank Credit Card "}
          number={8349}
          amount={"$184.30"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default User;
