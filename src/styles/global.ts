import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;       

    }

    body {
        background: #8FF7A7;
        -webkit-font-smoothing: antialiased;

        align-items: center;
        //background-image: linear-gradient(to bottom right, cyan, white, cyan);

        text-align: center;
        
    }

    #root {
        max-width:960px;
        margin: 0 auto;
        padding: 40px 20px;

    }
`;