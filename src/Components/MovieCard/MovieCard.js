import React from "react";
import { Card } from "react-bootstrap";

import Rating from "../Rating/Rating";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card className="movieCard">
        <Card.Img variant="top" src={movie.img} className="movieImg" />
        <Card.Body className="cardBody">
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
          <Rating rating={movie.rating} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
