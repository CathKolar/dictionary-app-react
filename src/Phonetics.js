import React from "react";
export default function Phonetics({ phonetics }) {
  console.log({ phonetics });
  return (
    <div className="Phonetics">
      <figure>
        <figcaption>Listen:</figcaption>
        <audio controls src={phonetics.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
      {phonetics.text}
    </div>
  );
}
