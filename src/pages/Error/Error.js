import React from "react";
import "./style/style.css";

const Erreur = (A) => {
  return (
    <div>
      <div className="Error-txt-img"></div>
      <div className="Error-container">
        <div className="Error-img"></div>
        <div className="Error-Message">
          <h2>Oops! la page demandée n'existe pas</h2>
          <p>
            Désole, vous n'etes pas encore inscrit dans la base de donnée{" "}
            <br></br>
            Votre ID est modifié ou bien le service est desactiver
            temporairement
          </p>
        </div>
      </div>
    </div>
  );
};

export default Erreur;
