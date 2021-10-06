import React, { useState } from "react";
import { postNewComment } from "../api";
import { useHistory } from "react-router-dom";

function WriteReview() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const history = useHistory();

  function onSubmit() {
    const newReview = {
      name,
      comments: review,
    };
    postNewComment(newReview).then(() => {
      history.push("/reviews");
    });
  }
  return (
    <div className="formContainer">
      <div className="form">
        <h1>Give us A Review</h1>
        <form
          className="formText"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <label>Review: </label>
          <textarea
            type="text"
            onChange={(e) => {
              setReview(e.target.value);
            }}
            value={review}
            rows="4"
            cols="50"
          >
            {review}
          </textarea>
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default WriteReview;
