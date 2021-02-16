import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       /* font-family: 'Montserrat', sans-serif; */
       /* font-family: Open-Sans, Helvetica, Sans-Serif; */
       font-family: 'Didact Gothic';font-size: 19px;
   }

   html, body {
       overflow-x: hidden;

   }
`;

export default GlobalStyle;