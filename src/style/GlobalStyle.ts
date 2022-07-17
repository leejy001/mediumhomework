import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 15px;
    line-height: 1;
    letter-spacing: -0.5px;
  }

  html, body {
    width: 100%;
    height: 100%;
    ::-webkit-scrollbar {
      width: 12px;
      background: #2D5016;
    }
    ::-webkit-scrollbar-thumb {
      border: 1px solid transparent;
      background-clip: padding-box;
      background-color: #5AA02C;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  #root {
    min-height: 100vh;
    background: linear-gradient(90deg, rgba(45, 80, 22, 0.8) 0%, rgba(90, 160, 44, 0.85) 35%, rgba(170, 222, 135, 0.8) 100%);
  }

  body {
    background: url('/assets/bg-green-web.png') no-repeat fixed center/cover;
  }

  ul, li {
    list-style: none;
  }

  p {
    margin: 0;
  } 
`
