import React from "react";

export default function Card({ title, text, img, moreText }) {
  return (
    <article className="card">
      <img src={img} alt={title} />

      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>

        {moreText && <p className="more-text">{moreText}</p>}
      </div>
    </article>
  );
}