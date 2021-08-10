import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --light-green: #CFFFEC;
    --green: #80C9AC;
    --orange: #E09168;
    --white: #F5F5F5;
    --black: #181818;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;
