import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Users() {
  const [data, setData] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [text, setText] = useState(searchParams.get("q") || "");
  
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [page]);

  useEffect(()=>{
    setSearchParams({
      page,
      q:text
    });
  },[page,text])
  // if (!state.isAuth) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      <h1>Users Page</h1>
      <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="query"
      />
      <div>
        <button disabled={page===1} onClick={()=>setPage(1)}>1</button>
        <button disabled={page===2} onClick={()=>setPage(2)}>2</button>
      </div>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.first_name}</h3>
          <img width="100px" src={user.avatar} alt={user.id} />
          <div>
            <Link to={`/users/${user.id}`}>Show more details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
