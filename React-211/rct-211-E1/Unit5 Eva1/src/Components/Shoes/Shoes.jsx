import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";

const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes, isLoading, isError } = useSelector((state) => state);
  console.log("shoe:", shoes);

  const getShoesAPI = () => {
    dispatch(getShoesRequest());

    axios
      .get("http://localhost:8080/shoes")
      .then((res) => {
        setTimeout(() => {
          dispatch(getShoesSuccess(res.data));
        }, 1000);
      })
      .catch(() => {
        dispatch(getShoesFailure());
      });
  };

  useEffect(() => {
    getShoesAPI();
  }, [dispatch]);

  if (isLoading) return <div style={{ textAlign: "center" }}>Loading...</div>;
  if (isError) return <div style={{ textAlign: "center" }}>Error...</div>;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gap: "30px",
        margin: "auto",
        width: "90%",
      }}
    >
      {/* Map through the shoes list here */}
      {shoes.map((el) => (
        <ShoeCard el={el}></ShoeCard>
        // <div  style={{ border: "1px solid", width: "50%", padding: "10px" }}>
        //   <img src={el.image} style={{ width: "100%" }} alt="" />
        //   <div>{el.name}</div>
        //   <div>in Cart: {el.cart_quantity}</div>
        //   <div style={{ display: "flex", gap: "10px" }}>
        //     <button>+</button>
        //     <button>-</button>
        //   </div>
        // </div>
      ))}
      
    </div>
  );
};

export default Shoes;
