import React from "react";
import { DecQunAPI, IncQunAPI } from "../../../Redux/action";
import { useDispatch } from "react-redux";

const ShoeCard = ({ el }) => {
  const dispatch = useDispatch();

  const incQuantityHandler = (el, inc) => {
    IncQunAPI(el, inc, dispatch);
  };

  const decQuantityHandler = (el, inc) => {
    DecQunAPI(el, inc, dispatch);
  };
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <img
        data-cy="shoe-card-image"
        src={el.image}
        style={{ width: "50%" }}
        alt="shoe"
      />
      <div>
        <div data-cy="shoe-name">{el.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{el.cart_quantity}</div>
          <button
            data-cy="increment-shoe-count-button"
            onClick={() => incQuantityHandler(el, 1)}
          >
            +
          </button>
          <button
            data-cy="decrement-shoe-count-button"
            onClick={() => decQuantityHandler(el, 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
