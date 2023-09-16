import * as data from "./actionTypes";
import {loadData, saveData} from "../../utils/accessLocalStorage"

const initialState={
    counter:loadData("counter") || 1,
    todos:[],
    isLoading:false,
    isError:false,

}

const reducer =(oldState=initialState,action)=>{
    const {type,payload} =action;
    switch(type){
        case data.INCREMENT:
            let newCountIncrement=oldState.counter+payload;
            saveData("counter",newCountIncrement)

        return {...oldState,counter:oldState.newCountIncrement}

        case data.DECREMENT:
            let newCountDecrement=oldState.counter-payload
            saveData("counter",newCountDecrement)
        return {...oldState,counter:oldState.newCountDecrement}
       
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