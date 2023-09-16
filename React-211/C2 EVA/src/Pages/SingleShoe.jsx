import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getShoesAPI } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const { id } = useParams();
  const { shoes } = useSelector((state) => state.shoe);
  const [currentShoe, setCurrentShoe] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getShoesAPI());
    }
  }, [shoes.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = shoes?.find((shoe) => shoe.id === Number(id));
      temp && setCurrentShoe(temp); //if temp have some id
    }
  }, [shoes, id]);
  return (
    <div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
      <h2>{currentShoe.name}</h2>
      <div>
        <img
          src={currentShoe.image}
          style={{ width: "100%", height: "600px" }}
          alt="Cover Pic"
        />
      </div>
      <div>
        <div>{currentShoe.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
