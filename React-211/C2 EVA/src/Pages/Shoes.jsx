import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getShoesAPI } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import { useSearchParams, useLocation, Link } from "react-router-dom";

const Shoes = () => {
  const { shoes, isLoading, isError } = useSelector((state) => state.shoe);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log("shoes:", shoes);

  useEffect(() => {
    if (shoes.length === 0 || location.search) {
      const getShoesParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getShoesAPI(getShoesParams));
    } else {
      dispatch(getShoesAPI());
    }
  }, [location.search]);

  if (isLoading) return <div style={{ textAlign: "center" }}>Loading...</div>;
  if (isError) return <div style={{ textAlign: "center" }}>Error...</div>;
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        // border: "1px solid",
        width: "98%",
        margin: "auto",
      }}
    >
      <Filter />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "15px",
          gridTemplateRows: "auto",
          // border: "1px solid ",
          width: "65%",
          margin: "auto",
        }}
      >
        {shoes.length &&
          shoes.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  to={`/shoes/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ShoeCard item={item} />
                </Link>
              </div>
            );
          })}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
