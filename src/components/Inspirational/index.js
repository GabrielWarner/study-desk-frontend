import React, { useState, useEffect } from "react";
import "./style.css";

export default function Inspirational() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((quote) => {
        const count = Object.keys(quote).length;
        const random = Math.floor(Math.random() * (count + 1));
        console.log(random);
        setQuote(quote[random].text);
        setAuthor(quote[random].author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((quote) => {
        const count = Object.keys(quote).length;
        const random = Math.floor(Math.random() * (count + 1));
        console.log(random);
        setQuote(quote[random].text);
        setAuthor(quote[random].author);
      });
  };

  return (
    <div className="inspirationalQ">
      <div style={{color:"white"}} className="quote">
        <h2 style={{fontSize:"1rem"}}>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <button className="inspirationalButton" onClick={fetchNewQuote}>
        Generate New Quote
      </button>
    </div>
  );
}
