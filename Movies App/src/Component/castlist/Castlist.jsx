import React from "react";
import unknownProfile from "../../assets/Unknown.jpg";
import LoadCard from "../../Component/loading/LoadCard";

function Castlist({ casts }) {
  if (!casts) {
    return null;
  }
  return (
    <div className="casts">
      <div className="castslist flex overflow-hidden overflow-x-scroll">
        {casts.map((item, i) => (
          <div key={i} className="casts__item flex flex-col mr-5">
            <img
              className="castImg max-w-[80px] sm:max-w-[120px]"
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                  : unknownProfile
              }
              alt=""
            />
            <p className="castName py-1 text-[10px]">{item.original_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Castlist;
