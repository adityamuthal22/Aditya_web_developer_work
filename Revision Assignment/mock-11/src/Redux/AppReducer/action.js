import axios from "axios";
import * as types from "./action.types";

export const getData=()=>(dispatch)=>{
    axios.get(`https://mockserver97.herokuapp.com/api/data`)
    .then((res)=>dispatch({type:types.GET_DATA_SUCCESS,payload:res.data}))
    
}

