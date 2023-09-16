import logo from "./logo.svg"
import {AppStyled,AppHeader,AppLogo,Flexbox} from "./App.styled.js"


function App() {
  const  flexProps={
    "flex-direction":"row",
  }
  return (
    <AppStyled width="10px" name="Aditya">
      <AppHeader>
      <AppLogo src={logo} alt="logo" />
       <Flexbox {...flexProps}>
      <div>A</div>
      <div>B</div>

       </Flexbox>
      </AppHeader>
    </AppStyled>
   
    
  );
}

export default App;
