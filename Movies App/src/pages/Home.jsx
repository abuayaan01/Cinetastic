import React from "react";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Modal from "../Component/modal/Modal";

function Home() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClick = (val) => {
    setMovieId(val);
    setShowModal(true);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b6e7c6262c189f9b3f574f65437cc684"
      )
      .then((res) => {
        let movie = res.data.results;
        setMovies(movie);
        console.log(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Carousel
        showThumbs={false}
        swipeable={true}
        autoPlay={false}
        transitionTime={3}
        infiniteLoop={true}
      >
        {movies.map((movie) => (
          <div className="carouselContainer">
            <div
              style={{
                background:
                  `linear-gradient(45deg,black,transparent),url("https://image.tmdb.org/t/p/original` +
                  movie.backdrop_path +
                  `")`,
              }}
              className="movieDetails min-h-screen flex items-center"
            >
              <div className="carouselDetails flex flex-col items-start w-1/2 p-14">
                <div className="title text-left">{movie.original_title}</div>
                <p className="review text-2xl text-left">
                  <AiFillStar className="inline relative bottom-[2px] mx-1 text-[#ffee00]" />
                  {movie.vote_average + "/10"}
                </p>
                <p className="desc text-left py-2">{movie.overview}</p>
                <button
                  className="text-xl px-5 py-1 my-3 border-2"
                  onClick={() => {
                    handleClick(movie.id);
                  }}
                >
                  Trailer
                </button>
              </div>
              <div className="moviePoster w-1/2">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + movie.poster_path
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Modal movieId={movieId} active={showModal} setActive={setShowModal} />
    </div>
  );
}

export default Home;
