import React from "react";
import Example from "./Example";

export default function Meaning(props) {
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
              <Example example={definition.example} />

              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}
