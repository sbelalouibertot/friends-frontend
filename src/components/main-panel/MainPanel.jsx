import React, { useEffect, useState } from "react";
import "./MainPanel.scss";
import Friends from './friends/Friends'
import Messages from './messages/Messages'
import Activity from './activity/Activity'

const MainPanel = (props) => {
  const { user, onLogout } = props;
  const { name, subscriptionDate, friendsNb, incomingMessagesNb } = user;

  return (
    <div className="main-panel">
        <Activity />
        <Friends />
        <Messages />
    </div>
  );
};

export default MainPanel;
