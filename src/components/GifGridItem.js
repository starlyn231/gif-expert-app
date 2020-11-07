import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  console.log(id, title, url);
  return (
    <div className="card animate__slideInDown">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
