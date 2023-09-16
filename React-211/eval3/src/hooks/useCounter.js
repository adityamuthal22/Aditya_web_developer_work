import React ,{useState} from "react"
export const useCounter = (init) => {
    const [count, setcount] = useState(init.initialValue)

    const incCount = (...args) => {
        if(count+Number(args)<init.maxValue){
            if(args.length===0){
                setcount(count+1)
            }else{
                setcount(count + Number(args))
            }
        }
    }
    const decCount = (...args) => {
        if(count-Number(args)>init.minValue){
            if(args.length===0){
                setcount(count-1)
            }else{
                setcount(count - Number(args))
            }
        }
    }
        
    // console.log(init)
    return {count,incCount,decCount,setcount}
};
