import React from "react";

const CollaboratorCard = ({ name, imgSrc }) => {
  return (
    <div className="text-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mx-auto"
      />
      <p className="mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};

export default CollaboratorCard;
