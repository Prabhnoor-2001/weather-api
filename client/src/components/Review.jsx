import React, { useState, useEffect } from "react";
import { getComments } from "../api";

const Review = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getComments().then((data) => {
      setReviews(data.body);
    });
  }, []);
  return (
    <div className="container">
      <h1>Reviews</h1>
    </div>
  );
};
export default Review;
