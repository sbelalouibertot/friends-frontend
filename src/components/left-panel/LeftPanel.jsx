import React, { useEffect, useState } from "react";
import "./LeftPanel.scss";

const LeftPanel = (props) => {
  const { user } = props;
  const { name, subscriptionDate, friendsNb, incomingMessagesNb } = user;

  const [photos, setPhotos] = useState([
    {
      source:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg",
    },
    {
      source:
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    },
    {
      source:
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    },
    {
      source:
        "https://www.marshallsindia.com/images/younique/nature/nature-cover-slider-6.jpg",
    },
    {
      source:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral",
    },
    {
      source:
        "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    },
    {
      source: "https://www.computerhope.com/jargon/r/random-dice.jpg",
    },
    {
      source:
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      source: "https://miro.medium.com/max/2625/1*VQBcSuSfFqSePJaEC0T5yg.jpeg",
    },
  ]);

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
          {photos.map((photo) => (
            <img className="photo" src={photo.source} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
