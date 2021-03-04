import React, { useEffect, useState } from "react";
import "./Friends.scss";

const Friends = (props) => {
  const [friendsActions, setFriendsActions] = useState([
    {
      key: "Pierre",
      avatar: "images/avatar.jpg",
      description: "est allé au restaurant",
      date: "hier",
    },
    {
      key: "Jacques",
      avatar: "images/avatar.jpg",
      description: "a joué d'un instrument de musique",
      date: "il y a 2 jours",
    },
    {
      key: "Thierry",
      avatar: "images/avatar.jpg",
      description: "a regardé un film",
      date: "il y a une semaine",
    },
  ]);
  return (
    <div className="friends">
      <div className="title">Friends</div>
      <div className="subtitle">Apprenez-en plus sur votre réseau</div>
      <div className="friends-actions-container">
        {friendsActions.map((action) => (
          <div className="friends-action">
            <img src={action.avatar} alt="User avatar" />
            <div className="friends-action-right">
              <div className="friends-action-description">
                {action.key} {action.description}
              </div>
              <div className="friends-action-date">{action.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
