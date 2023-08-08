import React from "react";
import { Skeleton } from "react-skeleton-generator";

function LoadCard() {
  return (
    <Skeleton.SkeletonThemeProvider highlight="dark" color="#3a3a3a">
      <div
        className="h-screen items-center gap-10"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton borderRadius="50%" count={3} width="100px" height="100px" />
      </div>
    </Skeleton.SkeletonThemeProvider>
  );
}

export default LoadCard;
