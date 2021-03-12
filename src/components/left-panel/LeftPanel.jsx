import React, { useEffect, useState } from "react";
import "./LeftPanel.scss";

const LeftPanel = (props) => {
  const { user } = props;
  const { name, subscriptionDate, friendsNb, incomingMessagesNb } = user;

  return (
    <div className="left-panel">
      <div className="user-container">
        Bonjour {name} !<img src="images/avatar.jpg" alt="User avatar"></img>
      </div>
      <div className="infos-container">
        <div className="info">
          <span>Âge</span>
          <span>30</span>
        </div>
        <div className="info">
          <span>Ville</span>
          <span>Lyon</span>
        </div>
        <div className="info">
          <span>Amis</span>
          <span>{friendsNb}</span>
        </div>
        <div className="info">
          <span>Inscription</span>
          <span>{new Date(subscriptionDate).toLocaleDateString()}</span>
        </div>
        <div className="info">
          <span>Nouveaux messages</span>
          <span>{user.incomingMessagesNb}</span>
        </div>
      </div>
      <div className="photos-container">
        <div className="title">Mes photos</div>
        <div className="photos">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((photo) => (
          <img className="photo" src="" />
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default LeftPanel;
