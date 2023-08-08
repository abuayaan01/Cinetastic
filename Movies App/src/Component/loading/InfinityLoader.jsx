import React from "react";
import loader from "../../assets/Infinity-1s-200px.svg";

function InfinityLoader() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <img src={loader} alt="" />
      </div>
    </>
  );
}

export default InfinityLoader;
