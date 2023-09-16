import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";

function Users() {

    const [data,setData] = useState([])
   
    useEffect(()=>{
        axios({
           url:"https://reqres.in/api/users",
           method :"GET"
        })
        .then(res=>{
            setData(res.data.data)
        })
        .catch(err=>{ })
    },[])

  return (
    <div>
        {
          data.map((item)=>(
           
              <div>
                  <img src={item.avatar} width="100px" alt={item.email} />
                  <div>
                      Name:{item.first.name}
                  </div>
              </div>
          ) ) 
        }
    </div>
  )

}

export default Users;