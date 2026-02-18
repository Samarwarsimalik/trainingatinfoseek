import React from "react";

function Card({ img, title, desc }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300">
      <img src={img} alt={title} className="h-20 mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default Card;
