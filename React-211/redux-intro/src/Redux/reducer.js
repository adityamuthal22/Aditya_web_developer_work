import * as data from "./actionTypes";

const initialState={
    counter:5,
    todos:[],
    isLoading:false,
    isError:false,

}

const reducer =(oldState=initialState,action)=>{
    const {type,payload} =action;
    switch(type){
        case data.INCREMENT:
        return {...oldState,counter:oldState.counter + payload}
        
        case data.DECREMENT:
        return {...oldState,counter:oldState.counter - payload}
       
        case data.GET_TODOS_REQUEST:
            return{
                ...oldState,
                isLoading:true,
                isError:false,
            }
        case data.GET_TODOS_SUCCESS:
                return{
                    ...oldState,
                    isLoading:false,
                    isError:false,
                    todos:[...payload],
                }
         case data.GET_TODOS_FAILURE:
              return{
                        ...oldState,
                        isLoading:false,
                        isError:true,
                    }


        default:
            return oldState;
    }
}
export {reducer};