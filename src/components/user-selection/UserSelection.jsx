import React, { useEffect, useState } from "react";
import "./UserSelection.scss";

const UserSelection = (props) => {
  const { userList, onUserSelectedChange } = props;

  return (
    <div className="user-selection">
      <div className="selection-popup-container">
        <div className="selection-popup">
          <span className="description">Qui est-ce ?</span>
          {userList.map((user) => (
            <div className="user" onClick={() => onUserSelectedChange(user)}>
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
