import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../store/feed/feed.action";

const Home = () => {
const dispatch =useDispatch();
const {data,getFeeds}=useSelector((state)=>state.feed)

useEffect(()=>{
 if(data.length===0){
  dispatch(getFeedsAPI())
 }
},[]);
  return (
    <div>
      <h1>Home</h1>
      <br />
      {feeds.map((feed) => (
        <div
          key={feed.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{feed.title}</div>
          <div>{feed.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
