import React from "react";
import "./Phonetic.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <i className="bi bi-play-circle icon"></i>
        </a>
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  } else {
    return null;
  }
}
