import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../Component/card/Card";
import "../../Component/card/card.css";

function SimilarMovie({ id }) {
  const [relatedMovie, setRelatedMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "/similar?api_key=b6e7c6262c189f9b3f574f65437cc684"
      )
      .then((res) => {
        setRelatedMovie(res.data.results);
        console.log(relatedMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!id) {
    return null;
  }
  return (
    <>
      <div className="cardContainerOverlay pb-14">
        <div className="cardContainer sm:mx-14 flex sm:justify-center justify-around flex-row flex-wrap">
          {relatedMovie.slice(0, 18).map((item, i) => (
            <Card key={i} movie={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SimilarMovie;
