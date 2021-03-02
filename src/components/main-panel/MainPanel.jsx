import React, { useEffect, useState } from "react";
import "./MainPanel.scss";
import Friends from './friends/Friends'
import Messages from './messages/Messages'
import Posts from './posts/Posts'

const MainPanel = (props) => {
  const { user, onLogout } = props;
  const { name, subscriptionDate, friendsNb, incomingMessagesNb } = user;

  return (
    <div className="main-panel">
        <Posts />
        <Friends />
        <Messages />
    </div>
  );
};

export default MainPanel;
