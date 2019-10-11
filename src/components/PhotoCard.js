import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-data" key={props.id}>
      <h2>{props.title}</h2>
      <img src={props.imgUrl} />
      <p>{props.date}</p>
      <p>{props.description}</p>
      <p>{props.photographer}</p>
    </div>
  );
};

export default PhotoCard;
