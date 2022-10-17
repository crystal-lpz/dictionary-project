import React from "react";
export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <strong>Similar:</strong>
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
