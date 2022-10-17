import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <div className="container">
          <h2>{props.results.word}</h2>

          <Phonetic phonetic={props.results.phonetics[0]} />
          <Synonyms synonyms={props.results.meanings[0].synonyms} />
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
