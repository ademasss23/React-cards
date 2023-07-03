import React from "react";
import Card from "./Card";
import imagen1 from "../assets/playa.jpg";
import imagen2 from "../assets/torre.jpg";
import imagen3 from "../assets/japon.jpg";

const cards = [
  {
    id: 1,
    title: "Islandia",
    imagen: imagen1,
    url: "https://es.visiticeland.com/",
    text: "los mejores paisajes"
  },
  {
    id: 2,
    title: "Paris",
    imagen: imagen2,
    url: "https://www.france.fr/es/paris",
    text: "la mejor gastronomia"
  },
  {
    id: 3,
    title: "Tokio",
    imagen: imagen3,
    url: "https://www.gotokyo.org/es/index.html",
    text: "la mejor cultura"
  },
];

function Cards() {
  console.log(cards);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 ">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.imagen} url={card.url} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
