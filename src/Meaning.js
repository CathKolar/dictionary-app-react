import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

// render meanings and loop through all possible definitions
export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              → {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
