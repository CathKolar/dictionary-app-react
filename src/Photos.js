import React from "react";
import "./Photos.css";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <section className="Photos">
        {photos.map(function (photo) {
          return (
            <div>
              <a href={photo.src.original} target="blank">
                <img
                  src={photo.src.landscape}
                  key={photo.id}
                  alt={photo.src.photographer}
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}