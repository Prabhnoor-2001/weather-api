import React from "react";

function ReviewCard(props) {
  return (
    <div className="reviewCard">
      <h2>{props.name}</h2>
      <p>{props.comments}</p>
    </div>
  );
}

export default ReviewCard;
