import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import Modal from "../Component/modal/Modal";
import MovieList from "../Component/movieList/MovieList";
import { AiFillStar } from "react-icons/ai";
import { FcFilmReel } from "react-icons/fc";
import { BiInfoCircle, BiPlay } from "react-icons/bi";
import { MdOutlineHighQuality } from "react-icons/md";
import InfinityLoader from "../Component/loading/InfinityLoader";

function Home() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = (val) => {
    setMovieId(val);
    setShowModal(true);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=b6e7c6262c189f9b3f574f65437cc684"
      )
      .then((res) => {
        let movie = res.data.results;
        setMovies(movie);
        setLoading(false);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <>
        <InfinityLoader />
      </>
    );
  }

  return (
    <div>
      <Carousel
        showThumbs={false}
        swipeable={true}
        autoPlay={false}
        transitionTime={3}
        infiniteLoop={true}
      >
        {movies.map((movie, i) => (
          <div key={i} className="carouselContainer">
            <div
              style={{
                background:
                  `linear-gradient(45deg,black,transparent),url("https://image.tmdb.org/t/p/original` +
                  movie.backdrop_path +
                  `")`,
              }}
              className="movieDetails min-h-[60vh] sm:min-h-screen flex sm:items-center sm:justify-center sm:flex-row flex-col-reverse"
            >
              <div className="carouselDetails flex flex-col items-center sm:items-start sm:w-1/2 p-4 sm:p-14">
                <div className="title z-10 sm:px-0 sm:text-left">
                  {movie.original_title}
                </div>
                <p className="review z-10 text-sm sm:px-0 sm:text-2xl sm:text-left">
                  <span className="sm:mr-4 mr-4 sm:text-xl">
                    {movie.release_date.slice(0, 4)}
                  </span>
                  {movie.vote_average ? (
                    <>
                      <AiFillStar className="inline relative bottom-[2px] mx-1 text-[#ffee00]" />
                      <span className="sm:text-xl">{movie.vote_average}</span>
                    </>
                  ) : (
                    <>
                      <FcFilmReel className="inline text-orange-400 relative bottom-[2px] mr-3 text-[#ffee00]" />
                      Coming Soon
                    </>
                  )}

                  <MdOutlineHighQuality className="inline text-white text-2xl sm:text-[28px] relative bottom-[2px] ml-4" />

                  <span className="lang sm:mx-5 mx-4 sm:text-xl">
                    {movie.original_language}
                  </span>
                </p>
                <p className="desc text-left z-10 text-slate-200 sm:px-0 py-2">
                  {movie.overview}
                </p>
                <div className="carouselBtn z-10">
                  <button
                    className="inline text-sm sm:text-xl text-black bg-white font-semibold px-5 py-1 my-3 border-2"
                    onClick={() => {
                      handleClick(movie.id);
                    }}
                  >
                    <BiPlay className="inline text-[28px]" />
                    Trailer
                  </button>
                  <Link
                    className="inline text-sm sm:text-xl px-5 py-1 mx-3"
                    to={"/movie/" + movie.id}
                  >
                    <BiInfoCircle className="inline text-[28px]" />
                  </Link>
                </div>
              </div>
              <div className="moviePoster mt-[80px] sm:mt-0 sm:w-1/2">
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
      <MovieList subject={"upcoming"} />
      <MovieList subject={"top_rated"} />
      <MovieList subject={"popular"} />
    </div>
  );
}

export default Home;
