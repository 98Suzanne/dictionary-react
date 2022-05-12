import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              {definition.definition}
              <br />
              <Synonyms synonyms={definition.synonyms} />
              {definition.example && (
                <div className="Example">
                  <div>Example: "{definition.example}"</div>
                </div>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
