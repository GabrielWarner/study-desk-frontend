import React from "react";
import "./style.css";

export default function GoogleSearch() {
  return (
    <div className="search-container">
      <form
        target="_blank"
        action="https://www.google.com/search"
        method="get"
        className="searchbar"
      >
        <input className="searchInput" type="text" placeholder="Google Search" name="q" />
        <button className="search-btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
