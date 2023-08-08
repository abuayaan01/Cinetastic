import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import "./movieList.css";
import "../card/card.css";

function MovieList({ subject }) {
  const [itemList, setItemList] = useState([]);
  const [sub, setSub] = useState("");

  useEffect(() => {
    setSub(subject);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          sub +
          "?api_key=b6e7c6262c189f9b3f574f65437cc684"
      )
      .then((res) => {
        let movie = res.data.results;
        setItemList(movie);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sub]);

  return (
    <div>
      <p className="text-base sm:text-2xl uppercase mx-4 mt-5 mb-2 sm:m-14">
        {sub.replace(/_/i, " ")}
      </p>
      <div className="cardContainerOverlay sm:pb-14">
        <div className="cardContainer mx-4 sm:mx-14 flex flex-row">
          {itemList.map((item, i) => (
            <Card key={i} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
