import {COUNTER_DECREMENT,COUNTER_INCREMENT} from "./action";

export const add =(value)=>({
    type: COUNTER_INCREMENT, 
    payload:value,
});

export const substract =(value)=>({
    type:COUNTER_DECREMENT,
    payload:value,
})