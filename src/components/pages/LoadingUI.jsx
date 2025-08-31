import React, { useState } from "react";
// import { SyncLoader } from "react-spinners";
import { ScaleLoader } from "react-spinners";


const override = {
  display: "block",
  // margin: "50vh auto",
  margin: "50vh auto",

//   margin: "400px 400px 600px 600px",
//   margin: "500px auto",

//   borderColor: "red",
  borderColor: "white",

//   backgroudColor:"black",
};

const LoadingUI = () => {
  const [loading, setLoading] = useState(true);
  

  return (
    <div className="sweet-loading">
      <ScaleLoader
    //   <SyncLoader
        cssOverride={override}
        // height={38}
        // width={6}
        height={40}
        width={8}
        radius={2}
        margin={2}
        // color={"#123abc"}
        color={"#ffff"}
        loading={loading}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingUI;
