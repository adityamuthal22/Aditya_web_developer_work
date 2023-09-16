
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
//   const {dispatch} =store;
//  const {counter} =store.getState();
//  const [local,setLocal] =useState(0);
const  counter=useSelector(((store)=>store.counter))
// const data =useSelector((state)=>store.data);
// console.log(data)
const dispatch =useDispatch();

//  store.subscribe(()=>{
//   console.log("state after dispatch",store.getState())
//  setLocal((prev)=>prev+1);
// })

  const handleIncrement =()=>{
    dispatch({type:"INCREMENT",payload:1})
  }

  const handleDecrement=()=>{
      dispatch({type:"DECREMENT",payload:1})
    }

  return(
    <div >
    <h1>Counter</h1>
    <h1>Count:{counter}</h1>
    <button onClick={()=>dispatch(handleIncrement())}>Increment</button>
    <button onClick={()=>dispatch(handleDecrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
