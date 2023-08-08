import axios from "axios";
import React from "react";
import { useEffect, useState, useRef } from "react";

// import ReactModal from "react-modal";

function Modal({ movieId, active, setActive }) {
  const [id, setId] = useState("");
  const modalRef = useRef(null);
  useEffect(() => {
    setId("");
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?api_key=b6e7c6262c189f9b3f574f65437cc684"
      )
      .then((res) => {
        // setId(res.results[0].key);
        console.log(res.data.results[0].key);
        let tmp = res.data.results;
        tmp.map((i) => {
          if (i.type === "Trailer") {
            setId(i.key);
          }
        });
        // setId(res.data.results[0].key);
      })
      .catch((err) => {
        console.log(err);
      });

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [movieId]);

  // movieId

  if (!active) {
    return null;
  } else {
    return (
      <div className="backdrop-brightness-[0.2] flex justify-center items-center absolute top-0 w-full h-full">
        <iframe
          ref={modalRef}
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
export default Modal;
