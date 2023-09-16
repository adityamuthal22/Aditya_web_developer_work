import './App.css';
import {useState,useEffect} from "react";
import React from 'react';
import {useSearchParams} from "react-router-dom"

function App() {
  const [searchParams,setSearchParams]= useSearchParams();
  const initialGenreParams = searchParams.getAll("category")
  const [cate, setCate] = useState(initialGenreParams || []);
  const [data, setData] = useState([]);
  

  useEffect(()=>{
    getData(1);

  },[]) 

  useEffect(()=>{
    // if the category changes then reflect it on the URL search as well
    if(cate){
      const params ={};
      cate && (params.category=cate)
     console.log(params)
      setSearchParams(params)
      console.log(params)

    }
  },[cate,setSearchParams])

  const  getData = async(id)=>{
   

    let res = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await res.json()

    console.log(data)
    setData(data) 

  }

  const handleFilter = (e) => { 
    const option =e.target.value;
    //if the option is already present in the category,remove it
    //else add it in the category array
    let newCategory = [...cate];
    if(cate.includes(option)){
      //remove it
      newCategory.splice(newCategory.indexOf(option),1)
    }else{
      //add it
      newCategory.push(option);
      console.log(newCategory)
    }
    setCate(newCategory)
  };
console.log()
  return (
    <div className="App">

  
      <div>
        <h1>Filter : </h1>
 
     <div>
     <input type="checkbox"
      value="electronics"
      onChange={handleFilter}
      defaultChecked={cate.includes('electronics')}
       />
     <label>electronics</label>
     </div>

     <div>
     <input type="checkbox" 
     value="jewelery"
     onChange={handleFilter}
     defaultChecked={cate.includes('jewelery')}
      />
     <label>jewelery</label>
     </div>
    
      </div>
      

    {
      data.map((d) =>(
        <ul>
        <li key={d.id}> {d.title}</li>
        <li > {d.price}</li>
        </ul>
      ))
    }

    </div>
  );
}

export default App;
