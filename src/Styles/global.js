import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --light-green: #CFFFEC;
    --green: #80C9AC;
    --dark-green: #669985;
    --orange: #E09168;
    --white: #F5F5F5;
    --black: #181818;
    --sansSerif: 'Quicksand', sans-serif;
    --serif: 'Roboto Slab', serif;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--light-green);
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

  figcaption{
    display: none;
  }
`;
