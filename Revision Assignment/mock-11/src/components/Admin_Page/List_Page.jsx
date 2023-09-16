import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../Redux/AppReducer/action';

const List_Page = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.AppReducer.AllData);
    console.log("dataStore",data);


    useEffect(()=>{
        dispatch(getData());
    },[])
  return (
    <div>

    </div>
  )
}

export default List_Page