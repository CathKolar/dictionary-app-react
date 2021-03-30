import React from "react";
import "./Photos.css";

export default function Photos({ photos, results }) {
  if (photos) {
    return (
      <section className="Photos photo-row">
        {photos.map(function (photo) {
          return (
            <div className="photo-column">
              <img src={photo.src.original} key={photo.id} alt={results.word} />
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
