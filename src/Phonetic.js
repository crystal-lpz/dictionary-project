import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <h3>{props.phonetic.text}</h3>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        audio
      </a>
    </div>
  );
}
