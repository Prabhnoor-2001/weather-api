import React, { useState, useEffect } from "react";
import { getComments } from "../api";
import ReviewCard from "./ReviewCard";

const Review = (props) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments().then((data) => {
      setReviews(data.body);
      setLoading(false);
    });
  }, []);

  function loadReviewToCard() {
    return reviews.map((review) => {
      return (
        <ReviewCard
          key={review.id}
          name={review.name}
          comments={review.comments}
        />
      );
    });
  }

  let reviewCards;

  if (!loading) {
    reviewCards = loadReviewToCard();
  } else {
    reviewCards = <h1>Loading</h1>;
  }
  return (
    <div className="container">
      <h1>Reviews</h1>
      <div className="reviewCardContainer">{reviewCards}</div>
    </div>
  );
};
export default Review;
