import React from "react";
import { NavLink } from "react-router-dom";

const SearchBar = (props) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.getTemperature();
        }}
      >
        <input
          style={BarStyling}
          type="search"
          placeholder={props.placeholder}
          onChange={props.handleChange} //this handles the bar
        />
        <br />
        <button className="search-button" onClick={props.getTemperature}>
          search
        </button>
        <NavLink to="/new/review">
          <button className="search-button">Write a review</button>
        </NavLink>
      </form>
    </>
  );
};
export default SearchBar;
