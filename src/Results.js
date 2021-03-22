import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  // render results and loop through all possible meanings
  if (results) {
    return (
      <div className="Results">
        <h2>{results.word}</h2>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
