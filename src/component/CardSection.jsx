import React from "react";
import Card from "./Card";

const cardData = [
  {
    img: "/img/vite.svg",
    title: "Vite Original",
    desc: "Fast build tool for modern web apps."
  },
  {
    img: "/img/vite-copy.svg",
    title: "Vite Copy",
    desc: "Optimized version for performance."
  },
  {
    img: "/img/vitecopy2.svg",
    title: "Vite Copy 2",
    desc: "Advanced configuration ready."
  },
  {
    img: "/img/vitecopy2.svg",
    title: "Vite Copy 3",
    desc: "Advanced configuration ready."
  }
];

function CardSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8 p-10 bg-amber-50">
      {cardData.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          title={card.title}
          desc={card.desc}
        />
      ))}
    </div>
  );
}

export default CardSection;
