import React from "react";
import Card from "./Card";

export default function CardsGrid({ items = [] }) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}