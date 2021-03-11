import React, { useEffect, useState } from "react";
import "./Messages.scss";

const Messages = (props) => {
  const [messages, setMessages] = useState([
    {
      author: "Philippe",
      date: "02/04/2020",
      object: "Demande de réunion",
      content:
        "Bonjour, j'espère que tu vas bien. Pouvons-nous convenir d'un rendez-vous la semaine prochaine ? Merci",
    },
    {
      author: "Philippe",
      date: "02/04/2020",
      object: "Demande de réunion",
      content:
        "Bonjour, j'espère que tu vas bien. Pouvons-nous convenir d'un rendez-vous la semaine prochaine ? Merci",
    },
    {
      author: "Philippe",
      date: "02/04/2020",
      object: "Demande de réunion",
      content:
        "Bonjour, j'espère que tu vas bien. Pouvons-nous convenir d'un rendez-vous la semaine prochaine ? Merci",
    },
    {
      author: "Philippe",
      date: "02/04/2020",
      object: "Demande de réunion",
      content:
        "Bonjour, j'espère que tu vas bien. Pouvons-nous convenir d'un rendez-vous la semaine prochaine ? Merci",
    },
  ]);
  return (
    <div className="messages">
      <div className="title">Messages</div>
      <div className="subtitle">Gardez le contact</div>
      <div className="messages-container">
        <div className="messages-categories">
          <div className="category">Reçus</div>
          <div className="category">Envoyés</div>
        </div>
        <div className="messages-content">
          {messages.map((message) => (
            <div className="message">
              <div className="message-header">
                <div className="author">{message.author}</div>
                <div className="date">{message.date}</div>
              </div>
              <div className="object">{message.object}</div>
              <div className="content">{message.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
