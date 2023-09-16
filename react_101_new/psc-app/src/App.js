import "./styles.css";
import { useEffect, useState } from "react";
import RestuarantCard from "./components/RestuarantCard";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  function getResturants() {
    setLoading(true);
    setError(false);
    return fetch("https://62c011a3c134cf51cec88cec.mockapi.io/restaurants/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    getResturants();
  }, []);

  return (
    <div className="App">
      <img src="https://i.imgur.com/lMeVwr7.png" alt="" />
      {/* <RestuarantCard /> */}
      {data?.map((res) => (
        <RestuarantCard key={res.id} data={res} />
      ))}
    </div>
  );
}
