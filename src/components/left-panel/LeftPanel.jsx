import React, { useEffect, useState } from "react";
import "./LeftPanel.scss";

const LeftPanel = (props) => {
  const { user, onLogout } = props;
  const { name, subscriptionDate, friendsNb, incomingMessagesNb } = user;

  return (
    <div className="left-panel">
      <div className="user-container">
        Bonjour {name} !<img src="images/avatar.jpg" alt="User avatar"></img>
      </div>
      <div className="infos-container">
        <span>Inscrit le {new Date(subscriptionDate).toLocaleDateString()}</span>
        <span>{friendsNb} amis</span>
        <span>
          {user.incomingMessagesNb == 0
            ? "Pas de nouveaux messages reçus"
            : `${incomingMessagesNb} nouveaux messages`}
        </span>
      </div>
      <div className="actions-container">
        <span>Paramètres</span>
        <span onClick={() => onLogout()}>Se déconnecter</span>
      </div>
    </div>
  );
};

export default LeftPanel;
