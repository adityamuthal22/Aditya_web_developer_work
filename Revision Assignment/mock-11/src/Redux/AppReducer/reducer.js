import * as types from "./action.types";

const initState={
    AllData:[]
}

export const reducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_DATA_SUCCESS:{
            return{
                ...state,
                AllData:payload
            }
        }
        default:return state
    }
}