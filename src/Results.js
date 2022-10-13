import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <div className="container">
          <h2>{props.results.word}</h2>
          <h3>{props.results.phonetic}</h3>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>{" "}
      </div>
    );
  } else {
    return null;
  }
}
