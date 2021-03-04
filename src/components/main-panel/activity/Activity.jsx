import React, { useEffect, useState } from "react";
import "./Activity.scss";
import {
  GiCook,
  GiVacuumCleaner,
  GiAmericanFootballBall,
  GiViolin,
  GiTv,
  GiPizzaSlice,
} from "react-icons/gi";
import { useTransition, animated } from "react-spring";

const Activity = (props) => {
  const iconSize = 30;

  const [activityItems, setActivityItems] = useState([
    { key: "Cuisiner", icon: <GiCook size={iconSize} /> },
    { key: "Musique", icon: <GiViolin size={iconSize} /> },
    { key: "Ménage", icon: <GiVacuumCleaner size={iconSize} /> },
    { key: "Restaurant", icon: <GiPizzaSlice size={iconSize} /> },
    { key: "Film", icon: <GiTv size={iconSize} /> },
    { key: "Sport", icon: <GiAmericanFootballBall size={iconSize} /> },
  ]);

  const activityItemsTransitions = useTransition(activityItems, (item) => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" },
  });

  return (
    <div className="activity">
      <div className="title">Activité</div>
      <div className="subtitle">Qu'avez-vous fait aujourd'hui ?</div>
      <div className="activity-items-container">
        {activityItemsTransitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <div className="activity-item">
              {item.key} {item.icon}
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
