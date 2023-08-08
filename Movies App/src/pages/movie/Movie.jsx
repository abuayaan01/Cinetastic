import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
import Castlist from "../../Component/castlist/Castlist";
import SimilarMovie from "../../Component/similarmovie/SimilarMovie";
import axios from "axios";
import InfinityLoader from "../../Component/loading/InfinityLoader";

const Movie = () => {
  const [animation, setAnimation] = useState(true);
  const [currentMovieDetail, setMovie] = useState();
  const [credits, setCredits] = useState();
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    getCredits();
    getVideos();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    setAnimation(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setAnimation(false);
        // console.log(data);
      });
  };

  const getCredits = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCredits(data.cast);
        console.log(data.cast);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideos = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "/videos?api_key=b6e7c6262c189f9b3f574f65437cc684"
      )
      .then((res) => {
        setVideo(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (animation) {
    return (
      <>
        <InfinityLoader />
      </>
    );
  }

  return (
    <div>
      <div className="movie">
        <div className="movie__intro">
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
          />
        </div>
        <div className="movie__detail">
          <div className="movie__detailLeft">
            <div className="movie__posterBox">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieDetail ? currentMovieDetail.poster_path : ""
                }`}
              />
            </div>
          </div>
          <div className="movie__detailRight">
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </div>

              <div className="movie__genres">
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <>
                        <span className="movie__genre" id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="movie__detailRightBottom">
              <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>

            {/* Casts */}
            <div className="castContainer">
              <p className="text-xl font-semibold py-2">Casts</p>
              <Castlist casts={credits} />
            </div>
          </div>
        </div>
      </div>

      <div className="additional_info">
        {/* Related videos  */}

        <p className="sm:m-14 my-4 sm:text-[28px] text-xl font-semibold">
          Related Videos
        </p>
        <div className="videos w-full flex flex-col justify-center items-center">
          {video.slice(0, 3).map((item, i) => (
            <>
              <div className="video-container my-10">
                <p className="video_title sm:text-lg text-[12px]">
                  {item.name}
                </p>
                <iframe
                  className="video"
                  src={"https://www.youtube.com/embed/" + item.key}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ))}
        </div>

        {/* similiar movies */}

        <div>
          <p className="sm:m-14 my-4 sm:text-[28px] text-xl font-semibold">
            Similar
          </p>
          <SimilarMovie id={id} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
