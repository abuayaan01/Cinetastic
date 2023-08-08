import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ movie }) {
  let id = movie.id;
  // let movieName = movie.original_title;
  // let rating = movie.vote_average;
  let poster = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  return (
    <Link to={"/movie/" + id} className="mr-1 mb-4 sm:mb-[unset] sm:mr-4">
      <div className="movieContainer h-full my-0 sm:my-4">
        {movie.poster_path ? (
          <img src={poster} alt={movie.original_title} />
        ) : (
          <>
            <div className="flex sm:min-h-[300px]  h-full sm:h-[auto] border border-slate-500 justify-center items-center">
              <p className="text-2xl uppercase text-center font-bold">
                {movie.original_title}
              </p>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default Card;
