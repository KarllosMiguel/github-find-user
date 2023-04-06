import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  };
  body{
  width: 100%;
  height: 100vh;
  background: #323232;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  
`;

export default GlobalStyle;