// import Pagination from "../Components/Pagination";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";

function Dashboard() {
  let {handlelogout}=useContext(AppContext)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">TOKEN</h4>
      <button data-testid="logout-btn" onClick={handlelogout}>logout</button>
      <ul data-testid="item-container">
        {data.map((ele) => (
          <li data-testid="item">{ele.title}</li>
        ))}
      </ul>
      <div data-testid="pagination-container">{/* <Pagination /> */}</div>
    </div>
  );
}

export default Dashboard;
