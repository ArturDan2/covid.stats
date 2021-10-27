import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Montserrat', sans-serif;
    overflow-y: hidden;
}

input{
    font-family: 'Montserrat', sans-serif;
}
`

export default GlobalStyles;