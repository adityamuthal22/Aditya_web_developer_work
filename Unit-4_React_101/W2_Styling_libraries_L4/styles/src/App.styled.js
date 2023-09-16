import styled from "styled-components"

export const Flexbox=styled.div`
flex-direction:${(props)=>props.flexDirection || "row"}
`

export const AppStyled=styled.div`
dispaly:flex;
`
 export const AppHeader=styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white`;

export const AppLogo=styled.img`
{
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
`;