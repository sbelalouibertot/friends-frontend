import React, { useEffect, useState } from "react";
import "./MainPanel.scss";

const MainPanel = (props) => {
  const { user, onLogout } = props;
  const { name, subscriptionDate, friendsNb, incomingMessagesNb } = user;

  return (
    <div className="main-panel">
        
    </div>
  );
};

export default MainPanel;
