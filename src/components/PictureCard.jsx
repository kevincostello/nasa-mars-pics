import React from "react";

function PictureCard({ sol, id, img_src, camera }) {
  const { full_name } = camera;
  return (
    <li>
      <p>Camera: {full_name}</p>
      <p>Photo id: {id}</p>
      <p>Sol day: {sol}</p>
      <img src={img_src} alt="" />
    </li>
  );
}

export default PictureCard;
