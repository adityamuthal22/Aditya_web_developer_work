import React from "react";

const ShoeCard = ({ item }) => {
  console.log("item:", item);
  let shoeId = item.id;
  return (
    <div
      data-cy={`shoe-card-wrapper-${shoeId}`}
      style={{
        border: "2px solid",
        padding: "15px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <div>
        <img
          data-cy="shoe-card-image"
          src={item.image}
          style={{ width: "100%", height: "250px" }}
          alt="itmImage"
        />
      </div>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
