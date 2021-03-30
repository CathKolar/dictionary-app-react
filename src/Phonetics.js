import React from "react";
import "./Phonetics.css";

export default function Phonetics({ phonetics }) {
  return (
    <div className="Phonetics">
      <div className="phonetic-spelling">{phonetics.text}</div>
      <figure>
        <audio controls src={phonetics.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
}
