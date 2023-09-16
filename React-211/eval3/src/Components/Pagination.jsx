export const Pagination = ({ total, selected,count, onPageChange }) => {
  let s=[]
  for(let i=1; i<=total; i++){
    s.push(i)
  }
  console.log(total);
  return <div className="pageContainer" style={{display:"flex",  gap:"10px"}}>
    {selected==1 ? "" : <button onClick={()=>{onPageChange(selected-1)}}>prev</button>}
    {s.map((e,index)=>{
      return (
        <>
        {/* {console.log(selected==e)} */}
        {+(selected)==e ? (<div style={{border:"2px solid blue",padding:"5px"}}>{e}</div>) : (<div>{e}</div>)}
        </>
      )
    })}
    {selected>=total ? "" : <button onClick={()=>{onPageChange(selected+1)}}>next</button>}
  </div>;
};
