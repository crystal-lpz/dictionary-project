import React from "react";
export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <h3>{props.phonetic.text}</h3>
      <a href={props.phonetic.audio} target="_blank">
        audio
      </a>
    </div>
  );
}
