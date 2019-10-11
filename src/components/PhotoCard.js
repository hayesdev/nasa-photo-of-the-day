import React from "react";
import styled from "styled-components";

const ColorChange = styled.p`
  &:hover {
    color: red;
    transform: translateY(-5px) scale(1.5);
  }
`;

const PhotoCard = props => {
  return (
    <div className="photo-data" key={props.id}>
      <h2>{props.title}</h2>
      <img src={props.imgUrl} />
      <ColorChange className="color">{props.date}</ColorChange>
      <p>{props.description}</p>
      <p>{props.photographer}</p>
    </div>
  );
};

export default PhotoCard;
