import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --title: #F8F8F8;
    --text: #D7D7D7;
    --info: #BBBBBB;
    --pink: #FF57B2;
    --black-700: #1A1D23;

  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html, body, #root {
    width:100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Inter', sans-serif;
  }
`
