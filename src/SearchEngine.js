import React, { useState } from "react";
import "./styles.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState("");
  let temperature = 23;

  function handleSubmit(event) {
    event.preventDefault();
    if (city !== "") {
      setSearch(`It is ${temperature}°C in ${city}`);
    } else {
      setSearch("");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="searchResult">{search} </div>
    </>
  );
}