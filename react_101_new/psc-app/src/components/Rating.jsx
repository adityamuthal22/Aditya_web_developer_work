import React from "react";

const Rating = ({ rating, votes, reviews }) => {
  return (
    <div>
      <div>{rating}</div>
      <div>{votes} votes</div>
      <div>{reviews} reviews</div>
    </div>
  );
};

export default Rating;
