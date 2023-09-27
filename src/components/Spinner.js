import React, { Component } from "react";
import Eclipse from "./Eclipse.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Eclipse} alt="loading" />
      </div>
    );
  }
}
