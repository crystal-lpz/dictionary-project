import React from "react";

export default function Meaning(props) {
  // console.log(props.meaning.definitions);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definitions.synonyms}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
