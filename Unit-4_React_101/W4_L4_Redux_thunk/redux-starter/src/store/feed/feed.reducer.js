import {
    GET_FEED_ERROR,
    GET_FEED_LOADING,
    GET_FEED_SUCCESS,
}from "./feed.types"


const initalState={
  
    auth:{
        loading:false,
    error:false,
    },
    data:[],
}

export const feedReducer =(state=initalState, {type, payload})=>{
    switch(type){
        case GET_FEED_LOADING:{
            return{...state,
            getFeed:{
                ...state.getFeed,
                loading:true,
                error:true
            }
            }
        }
        case GET_FEED_SUCCESS:{
            return{...state,
            getFeed:{
                ...state.getFeed,
                loading:false,
                error:false,
            },
            data:payload,
            }
        }
        case GET_FEED_ERROR:{
            return{...state,
            getFeed:{
                ...state.getFeed,
                loading:false,
                error:true
            }
            }
        }
    
        default:{
            return state;
        }
    }
};