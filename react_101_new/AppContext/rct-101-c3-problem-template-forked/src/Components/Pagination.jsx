function Pagination({ 
  // total pages 
  total, 
  // current page of the component
  current, 
  // event handler when button is clicked, 
  // changePage accepts the new page in number
  changePage }) {


  // fix code here
function changePage(){

}
  let pages = <button
      data-testid="page-btn"
      onClick={changePage}
      disabled={}
    >
    </button>
  )
  return <div>
    {/* pages */}
  </div>;
}

export default Pagination;
