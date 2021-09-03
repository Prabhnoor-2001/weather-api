import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { getTemp } from "./api";
import SearchBar from "./components/searchBar";
import Review from "./components/Review";
import "./App.css";
import WriteReview from "./components/WriteReview";

function App() {
  const [currTemp, setTemp] = useState({});
  const [isLoading, setLoad] = useState(true);
  const [weather, setWeather] = useState({});
  const [currentCity, setCity] = useState("");
  useEffect(() => {
    getTemperature();
  }, []);

  function getTemperature() {
    if (isLoading) {
      getTemp("Auckland")
        .then((data) => {
          setTemp(data.main);
          setWeather(data.weather[0]);
          setLoad(false);
          return null;
        })
        .catch((err) => {
          console.log("hey error");
        });
    }
  }
  function handleChange(event) {
    //setSearch(event.target.value)
    //console.log(event.target.value);
    handleCityName(event.target.value);
  }
  function handleCityName(name) {
    setCity(name);
    //console.log(currentCity);
  }
  //console.log(currTemp);
  return (
    <>
      <Link to="/reviews">
        <button className="get-reviews-button">Reviews</button>
      </Link>
      <Link to="/new/review">
        <button className="get-reviews-button">Write a Review</button>
      </Link>

      <Route exact path="/">
        <div className="search">
          {isLoading ? (
            "loading..."
          ) : (
            <SearchBar
              placeholder="City name..."
              handleChange={(event) => {
                handleChange(event);
              }}
              getTemperature={getTemperature}
            />
          )}
        </div>

        <div className="data">
          <h1>
            <u>{currentCity}</u>
          </h1>
          <ul>
            <li>
              <h2>
                <span>{isLoading ? "loading..." : currTemp.temp}°C</span>
              </h2>
            </li>
            <li>
              <h2>
                <span>{isLoading ? "loading..." : weather.main}</span>
              </h2>
            </li>
            <li>
              <h3>
                <span>{isLoading ? "loading..." : weather.description}</span>
              </h3>
            </li>
          </ul>
        </div>
      </Route>
      <Route path="/reviews" component={Review} />
      <Route path="/new/review" component={WriteReview} />
    </>
  );
}

export default App;
