import React from "react";


function TeamCard(props) {
  return (
    <div className="dt-card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
     
    </div>
  );
}

export default TeamCard;
