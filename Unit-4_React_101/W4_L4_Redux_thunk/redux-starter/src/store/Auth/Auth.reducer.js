import {
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT
} from "./Auth.types"


const initalState={
  
    loading:false,
        error:false,
        
        isAuth:false,
        token:"",
}
export const authReducer =(state, {type, payload})=>{
    switch(type){
      
case LOGIN_ERROR:{
    return{...state,loading:false,
    error:true,
isAuth:true,
};
        }
case LOGIN_SUCCESS:{
    return{...state,
        loading:false,
        error:false,
    isAuth:true,
    token:payload.token};
        }
case LOGIN_LOADING:{
    return{...state,loading:true,
    error:false,
isAuth:false};
        }
        case LOGOUT:{
            return{
                ...state,isAuth:false
            }
        }
        default:{
            return state;
        }
    }
};