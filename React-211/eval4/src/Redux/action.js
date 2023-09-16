import axios from "axios";
import * as types from "./actionTypes"

export const getCountry=(params)=>dispatch=>{
    dispatch({type:types.GET_COUNTRIES_REQUEST})
    return axios.get("http://localhost:8080/countries",params).then((r)=>{
        dispatch({type:types.GET_COUNTRIES_SUCCESS,payload:r.data})
    }).catch((err)=>dispatch({type:types.GET_COUNTRIES_FAILURE}))
}

export const updatecity=(id,payload)=>dispatch=>{
    dispatch({type:types.UPDATE_COUNTRY_REQUEST})
    return axios.patch(`http://localhost:8080/countries/${id}`,payload).then((r)=>{
        dispatch({type:types.UPDATE_COUNTRY_SUCCESS,payload:r.data})
    }).catch((err)=>dispatch({type:types.UPDATE_COUNTRY_FAILURE,payload:err}))
}

export const deletecity=(id)=>dispatch=>{
    dispatch({type:types.DELETE_COUNTRY_REQUEST})
    return axios.delete(`http://localhost:8080/countries/${id}`).then((r)=>{
        dispatch({type:types.DELETE_COUNTRY_SUCCESS})
    }).catch((err)=>dispatch({type:types.DELETE_COUNTRY_FAILURE,payload:err}))
}