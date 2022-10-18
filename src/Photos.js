import React from "react";
import "./Photos.css";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div>
        <section>
          <div className="row">
            {props.photos.map(function (photos, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photos.src.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photos.src.small}
                      className="photos"
                      alt={props.name.word}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
