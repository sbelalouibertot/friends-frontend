import React, { useEffect, useState } from "react";
import "./App.css";
import LeftPanel from "./components/left-panel/LeftPanel";
import UserSelection from "./components/user-selection/UserSelection";
import MainPanel from "./components/main-panel/MainPanel";
import {AiFillMail, AiFillLike} from 'react-icons/ai'

const App = () => {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState([
    {
      name: "Jean",
      subscriptionDate: 0,
      friendsNb: 312,
      incomingMessagesNb: 0,
    },
    {
      name: "Pierre",
      subscriptionDate: 0,
      friendsNb: 402,
      incomingMessagesNb: 3,
    },
    {
      name: "Eric",
      subscriptionDate: 0,
      friendsNb: 121,
      incomingMessagesNb: 4,
    },
  ]);

  const onUserSelectedChange = (user) => setUser(user);
  const onLogout = () => setUser(null);

  return (
    <div className="App">
      <div className="header">
        <div className="header-title">
          <div className="header-main-title">Friends</div>
          <div className="divider"></div>
          <div className="header-secondary-title">
            Communiquez plus facilement
          </div>
        </div>
        <div className="header-icons">
          <AiFillLike />
          <AiFillMail />
          <div className="user-icon">
            S
          </div>
        </div>
      </div>
      {user ? (
        <div className="panel-container">
          <LeftPanel user={user} onLogout={onLogout} />
          <MainPanel user={user}></MainPanel>
        </div>
      ) : (
        <UserSelection
          userList={userList}
          onUserSelectedChange={onUserSelectedChange}
        />
      )}
    </div>
  );
};

export default App;
