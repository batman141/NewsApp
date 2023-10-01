import React from "react";
import Spin from "./Spin.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={Spin} alt="loading" height="30px" />
    </div>
  );
};

export default Spinner;
